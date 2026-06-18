const fs = require('fs');
const https = require('https');

let content = fs.readFileSync('data.js', 'utf8');
const regex = /"title":\s*"(.*?)",\s*"imageUrl":\s*"(.*?)"/g;

let items = [];
let match;
while((match = regex.exec(content)) !== null) {
  items.push({
    title: match[1],
    imageUrl: match[2],
    index: match.index
  });
}

function checkImage(url) {
  return new Promise((resolve) => {
    https.get(url, res => {
      resolve(res.statusCode < 400 && res.statusCode !== 301 && res.statusCode !== 302);
    }).on('error', () => resolve(false));
  });
}

function searchJikan(title) {
  return new Promise((resolve, reject) => {
    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(title)}&limit=1`;
    https.get(url, { headers: {'User-Agent': 'Anidamn/1.0'} }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.data && parsed.data.length > 0) {
            resolve(parsed.data[0].images.jpg.image_url);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  console.log(`Checking ${items.length} items...`);
  let fixedCount = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const isOk = await checkImage(item.imageUrl);
    
    if (!isOk) {
      console.log(`Broken: ${item.title}. Fetching from Jikan...`);
      // Rate limit for Jikan is 3 req/sec, let's sleep 1000ms
      await sleep(1000);
      const newUrl = await searchJikan(item.title);
      if (newUrl) {
        console.log(` -> Found new URL: ${newUrl}`);
        content = content.replace(item.imageUrl, newUrl);
        fixedCount++;
      } else {
        console.log(` -> Could not find new URL for ${item.title}`);
      }
    }
  }

  if (fixedCount > 0) {
    fs.writeFileSync('data.js', content);
    console.log(`Fixed ${fixedCount} images. Saved to data.js.`);
  } else {
    console.log('No images needed fixing or could not be fixed.');
  }
}

main();
