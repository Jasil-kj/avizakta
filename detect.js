const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

try {
  const result = execSync(`"${ffmpeg}" -i public/hero-sequence-mobile/0001.webp -vf cropdetect=limit=24:round=2 -f null - 2>&1`).toString();
  console.log(result.split('\n').filter(line => line.includes('crop=')));
} catch (e) {
  console.log(e.stdout ? e.stdout.toString() : e.message);
}
