const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
try {
  if (fs.existsSync('public/hero-sequence-mobile')) {
    fs.rmSync('public/hero-sequence-mobile', { recursive: true, force: true });
  }
  fs.mkdirSync('public/hero-sequence-mobile', { recursive: true });
  execSync(`"${ffmpeg}" -y -i "LED_bulb_ mobile view.mp4" -vf "scale=608:1080:force_original_aspect_ratio=increase,crop=608:1080" -c:v libwebp -q:v 95 -preset default public/hero-sequence-mobile/%04d.webp`, { stdio: 'inherit' });
  console.log('Mobile extraction successful');
} catch (e) {
  console.error(e);
}
