const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

try {
  let output = "";
  try {
    output = execSync(`"${ffmpeg}" -i public/mid_vid.mp4 2>&1`, { stdio: 'pipe' }).toString();
  } catch(e) {
    output = (e.stdout ? e.stdout.toString() : "") + (e.stderr ? e.stderr.toString() : "");
  }

  const match = output.match(/Video: .*?, (\d+)x(\d+)/);
  if (match) {
    const w = parseInt(match[1]);
    const h = parseInt(match[2]);
    console.log(`Dimensions: ${w}x${h}`);
    
    const t1_x = Math.floor(w * 0.1);
    const t1_y = Math.floor(h * 0.15);
    const t1_w = Math.floor(w * 0.7);
    const t1_h = Math.floor(h * 0.25);
    
    const t2_x = Math.floor(w * 0.05);
    const t2_y = Math.floor(h * 0.45);
    const t2_w = Math.floor(w * 0.9);
    const t2_h = Math.floor(h * 0.15);
    
    console.log("Processing video to blur text...");
    execSync(`"${ffmpeg}" -y -i public/mid_vid.mp4 -vf "delogo=x=${t1_x}:y=${t1_y}:w=${t1_w}:h=${t1_h},delogo=x=${t2_x}:y=${t2_y}:w=${t2_w}:h=${t2_h}" -c:a copy public/mid_vid_clean.mp4`, { stdio: 'inherit' });
    console.log("Done.");
  } else {
    console.log("Could not detect dimensions:", output);
  }
} catch(e) {
  console.log("Error:", e.message);
}
