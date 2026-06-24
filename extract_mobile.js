const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
try {
  execSync(`"${ffmpeg}" -y -i LED_bulb_desktop.mp4 -vf "crop=608:1080:656:0" -c:v libwebp -q:v 95 -preset default public/hero-sequence-mobile/%04d.webp`, { stdio: 'inherit' });
  console.log('Mobile extraction successful');
} catch (e) {
  console.error(e);
}
