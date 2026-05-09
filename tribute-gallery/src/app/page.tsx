import fs from "fs";
import path from "path";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import GalleryComponent from "@/components/GalleryComponent";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";

// Read images from the public/photos directory dynamically at build time
function getPhotos(): string[] {
  try {
    const photosDir = path.join(process.cwd(), "public", "photos");
    const files = fs.readdirSync(photosDir);
    // Filter out only image files and return their public paths
    const validExts = [".png", ".jpg", ".jpeg", ".webp", ".gif"];
    return files
      .filter((file) => validExts.includes(path.extname(file).toLowerCase()))
      .map((file) => `/photos/${file}`);
  } catch (error) {
    console.error("Error reading photos directory:", error);
    return [];
  }
}

export default function Home() {
  const images = getPhotos();

  return (
    <main className="min-h-screen relative selection:bg-gold/30 selection:text-charcoal">
      <Hero />
      <Story />
      <GalleryComponent images={images} />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
