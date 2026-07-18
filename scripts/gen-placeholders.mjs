// Generates abstract, duotone-friendly skyline placeholder SVGs.
// One-time utility; the SVGs in public/images are committed output.
// TODO: replace generated SVGs with licensed architectural photography,
// keeping the .img-duotone CSS treatment for a consistent grade.
import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "public", "images");
fs.mkdirSync(outDir, { recursive: true });

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function skyline({ name, seed, w = 1600, h = 1000 }) {
  const rand = mulberry32(seed);
  const inks = ["#16293d", "#1d3348", "#24405a", "#2b4a66"];
  let x = -40;
  const buildings = [];
  while (x < w + 40) {
    const bw = 60 + Math.floor(rand() * 140);
    const bh = 200 + Math.floor(rand() * (h * 0.62));
    const color = inks[Math.floor(rand() * inks.length)];
    const y = h - bh;
    buildings.push(`<rect x="${x}" y="${y}" width="${bw}" height="${bh}" fill="${color}"/>`);
    // window column lines
    const cols = Math.max(2, Math.floor(bw / 26));
    for (let c = 1; c < cols; c++) {
      const wx = x + (bw / cols) * c;
      buildings.push(
        `<line x1="${wx.toFixed(1)}" y1="${y + 14}" x2="${wx.toFixed(1)}" y2="${h}" stroke="#0c1b2a" stroke-width="1.4" opacity="0.55"/>`
      );
    }
    // floor lines
    const floors = Math.max(3, Math.floor(bh / 44));
    for (let f = 1; f < floors; f++) {
      const fy = y + (bh / floors) * f;
      buildings.push(
        `<line x1="${x}" y1="${fy.toFixed(1)}" x2="${x + bw}" y2="${fy.toFixed(1)}" stroke="#0c1b2a" stroke-width="1" opacity="0.4"/>`
      );
    }
    x += bw + Math.floor(rand() * 26);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Abstract city skyline placeholder">
<rect width="${w}" height="${h}" fill="#0e2033"/>
<rect width="${w}" height="${h}" fill="url(#g)" opacity="0.9"/>
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#20374e"/><stop offset="1" stop-color="#0c1b2a"/>
</linearGradient></defs>
${buildings.join("\n")}
</svg>`;
  fs.writeFileSync(path.join(outDir, `${name}.svg`), svg);
  console.log(`wrote ${name}.svg`);
}

skyline({ name: "skyline-nyc", seed: 11 });
skyline({ name: "skyline-bogota", seed: 47 });
skyline({ name: "skyline-medellin", seed: 83 });
skyline({ name: "skyline-miami", seed: 29 });
