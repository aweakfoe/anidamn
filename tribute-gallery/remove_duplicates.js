const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'photos');
const files = fs.readdirSync(dir).filter(f => f.match(/\.(png|jpe?g|webp|gif)$/i));

async function findDuplicates() {
  const hashes = [];
  let deletedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      const image = await Jimp.read(filePath);
      const hash = image.hash();
      
      let isDuplicate = false;
      for (const h of hashes) {
        const distance = Jimp.distance(image, h.image);
        const hashDistance = Jimp.compareHashes(hash, h.hash);
        
        // If perceptual distance is very small, or hashes are very similar
        if (distance < 0.05 || hashDistance < 0.15) {
          console.log(`Deleting ${file} - looks like a duplicate of ${h.file} (Dist: ${distance.toFixed(3)}, HashDist: ${hashDistance.toFixed(3)})`);
          fs.unlinkSync(filePath);
          deletedCount++;
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        hashes.push({ file, hash, image });
      }
    } catch(e) {
      console.error(`Error processing ${file}:`, e.message);
    }
  }
  
  console.log(`Finished. Deleted ${deletedCount} duplicate photos.`);
}

findDuplicates();
