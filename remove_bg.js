const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
try {
  execSync(`"${ffmpeg}" -y -i "WhatsApp Image 2026-06-24 at 7.40.00 PM.jpeg" -vf "colorkey=0x000000:0.1:0.2" -c:v png "src/app/icon.png"`, { stdio: 'inherit' });
  console.log('Conversion successful');
} catch (e) {
  console.error(e);
}
