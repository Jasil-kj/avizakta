const { execFile } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const inputPath = path.resolve('c:\\Users\\jasil\\OneDrive\\Desktop\\AVIZAKTA\\TensorPix - Wall_light_brand_film_story_202606210026-ezremove.mp4');
const outputDir = path.resolve(__dirname, '../public/hero-sequence');
const tempDir = path.resolve(__dirname, '../public/hero-sequence-temp');

// Ensure dirs exist
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir, { recursive: true });

if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir, { recursive: true });

console.log('Extracting all frames temporarily...');

const args = [
  '-i', inputPath,
  '-vf', 'scale=1920:-1',
  '-vcodec', 'libwebp',
  '-quality', '70', // slightly lower quality for faster load and smaller size
  path.join(tempDir, '%04d.webp')
];

const child = execFile(ffmpeg, args, (error, stdout, stderr) => {
  if (error) {
    console.error('Error extracting frames:', error);
  } else {
    const files = fs.readdirSync(tempDir).filter(f => f.endsWith('.webp')).sort();
    console.log(`Extracted ${files.length} frames total.`);
    
    // We want exactly 140 frames
    const targetCount = 140;
    const step = files.length / targetCount;
    
    let count = 0;
    for (let i = 0; i < targetCount; i++) {
      const idx = Math.min(Math.floor(i * step), files.length - 1);
      const file = files[idx];
      const newName = String(count + 1).padStart(4, '0') + '.webp';
      fs.copyFileSync(path.join(tempDir, file), path.join(outputDir, newName));
      count++;
    }
    
    console.log(`Saved ${count} frames to output directory.`);
    
    // Cleanup temp
    fs.rmSync(tempDir, { recursive: true, force: true });
    console.log('Done!');
  }
});
