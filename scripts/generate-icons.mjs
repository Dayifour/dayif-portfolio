import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

const source = new URL("../public/logos/brand-mark.svg", import.meta.url);
const publicDirectory = new URL("../public/", import.meta.url);
await mkdir(new URL("icons/", publicDirectory), { recursive: true });

const variants = [
  [16, "icons/favicon-16.png"],
  [32, "icons/favicon-32.png"],
  [48, "icons/favicon-48.png"],
  [180, "apple-touch-icon.png"],
  [192, "icons/icon-192.png"],
  [512, "icons/icon-512.png"],
];

await Promise.all(variants.map(async ([size, filename]) => {
  await sharp(source.pathname, { density: 384 }).resize(size, size).png()
    .toFile(new URL(filename, publicDirectory).pathname);
}));

// ICO supports PNG images, keeping every size crisp and transparent.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(size => sharp(source.pathname, { density: 384 })
  .resize(size, size).png().toBuffer()));
const directory = Buffer.alloc(6 + images.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(images.length, 4);
let imageOffset = directory.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(image.length, entry + 8);
  directory.writeUInt32LE(imageOffset, entry + 12);
  imageOffset += image.length;
});
await writeFile(new URL("favicon.ico", publicDirectory), Buffer.concat([directory, ...images]));
console.log("Generated favicon, Apple touch icon and manifest icons.");
