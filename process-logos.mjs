import { Jimp } from 'jimp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const logosDir = './buzzadam/logos';
const outDir   = './buzzadam/logos/processed';

if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

// bgType: 'light' = white/light background, 'dark' = black/dark background, 'transparent' = already has alpha
const logos = [
  { file: 'EH-Logo.png',                                                   bgType: 'transparent' },
  { file: 'Dentsply_sirona_logo.png',                                       bgType: 'transparent' },
  { file: 'AYAKA_-_Logo_1_-_schwarz.jpg',                                   bgType: 'dark'        },
  { file: 'netlution-gmb-h-logo.png',                                       bgType: 'transparent' },
  { file: '241021_ThreeSixtyVodka_Logo_sw.jpg',                             bgType: 'dark'        },
  { file: 'Image-Word-black-wB-1000x462.png',                               bgType: 'light'       },
  { file: '20502472-lamborghini-marke-logo-auto-symbol-weiss-design-italienisch-automobil-illustration-mit-schwarz-hintergrund-kostenlos-vektor.jpg', bgType: 'dark' },
  { file: 'Proline-inv.png',                                                bgType: 'transparent' },
  { file: 'Logo_MHC.gif',                                                   bgType: 'light'       },
  { file: 'csm_Logo_Heidelberg_9220209933.png',                             bgType: 'light'       },
  { file: 'Unbenannt-1.png',                                                bgType: 'light'       },
  // Purelei (.webp) handled separately below
];

for (const { file, bgType } of logos) {
  const inPath  = path.join(logosDir, file);
  const outName = path.basename(file, path.extname(file)) + '.png';
  const outPath = path.join(outDir, outName);

  try {
    const img = await Jimp.read(inPath);
    const { data, width, height } = img.bitmap;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        const r = data[idx], g = data[idx+1], b = data[idx+2], a = data[idx+3];
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

        let transparent = false;

        if (bgType === 'light') {
          // Knock out near-white pixels (threshold 215 with some tolerance for anti-aliasing)
          transparent = brightness > 215 && a > 10;
        } else if (bgType === 'dark') {
          // Knock out near-black pixels
          transparent = brightness < 50 && a > 10;
        } else {
          // transparent PNG: knock out fully transparent pixels (already handled by alpha)
          transparent = a < 10;
        }

        if (transparent) {
          data[idx+3] = 0; // fully transparent
        } else if (a > 10) {
          // Remap partial transparency for anti-aliasing on light-bg logos
          if (bgType === 'light' && brightness > 150) {
            // Smooth edge: scale alpha by how dark the pixel is
            const darkness = 1 - brightness / 255;
            data[idx+3] = Math.round(darkness * 255);
          } else if (bgType === 'dark' && brightness > 50 && brightness < 120) {
            // Smooth dark-bg edge
            const lightness = (brightness - 50) / 70;
            data[idx+3] = Math.round(lightness * 255);
          }
          // Set to white
          data[idx]   = 255;
          data[idx+1] = 255;
          data[idx+2] = 255;
        }
      }
    }

    await img.write(outPath);
    console.log(`✓ ${outName}`);
  } catch (e) {
    console.log(`✗ ${file}: ${e.message}`);
  }
}

// Purelei: Social_Logo.png.webp — jimp can't read webp, copy as placeholder note
console.log('⚠ Social_Logo.png.webp (webp): skipped — handle manually or install sharp');
console.log('Done.');
