const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
try {
  execSync(`"${ffmpeg}" -y -i LED_bulb_desktop.mp4 -vf "scale=1920:1080" -c:v libwebp -q:v 95 -preset default public/hero-sequence/%04d.webp`, { stdio: 'inherit' });
  console.log('Extraction successful');
} catch (e) {
  console.error(e);
}
