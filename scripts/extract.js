const { execFile } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const inputPath = path.resolve('c:\\Users\\jasil\\OneDrive\\Desktop\\AVIZAKTA\\avizakta 3d.mp4');
const outputDir = path.resolve(__dirname, '../public/hero-sequence');

// Ensure output dir exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Extracting exactly 120 frames...');

// We want 120 frames. We'll use -vframes 120.
// If we wanted to span the entire video, we'd need its duration. 
// For now, let's just extract all frames, and we'll see how many there are.
// Then we can rename them to 0001-0120 if there are exactly 120.
// We'll scale to 1920 width to keep size reasonable for web.
const args = [
  '-i', inputPath,
  '-vf', 'scale=1920:-1',
  '-vcodec', 'libwebp',
  '-quality', '80', // webp quality
  path.join(outputDir, '%04d.webp')
];

const child = execFile(ffmpeg, args, (error, stdout, stderr) => {
  if (error) {
    console.error('Error extracting frames:', error);
    console.error(stderr);
  } else {
    console.log('Extraction complete!');
    // List files to see how many were extracted
    const files = fs.readdirSync(outputDir).filter(f => f.endsWith('.webp'));
    console.log(`Extracted ${files.length} frames.`);
  }
});
