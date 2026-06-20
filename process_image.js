const Jimp = require('jimp');

async function main() {
  try {
    const image = await Jimp.read('public/avizakta-wordmark.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // Calculate luminance-based alpha
      const maxRGB = Math.max(r, g, b);
      
      // If the pixel is very dark (almost black background), make it fully transparent
      if (maxRGB < 20) {
        this.bitmap.data[idx + 3] = 0; // Alpha 0
      } else {
        // For edge anti-aliasing, scale alpha smoothly
        // Gold max RGB is around 200-255. 
        // We'll set alpha based on maxRGB mapped from 20 to 120 (clamped to 255)
        let alpha = Math.min(255, Math.max(0, (maxRGB - 20) * (255 / 100)));
        this.bitmap.data[idx + 3] = alpha;
      }
    });

    await image.writeAsync('public/avizakta-wordmark-transparent.png');
    console.log('Successfully created avizakta-wordmark-transparent.png');
  } catch (err) {
    console.error(err);
  }
}

main();
