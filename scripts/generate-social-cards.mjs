import { readFile, writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const [regular, bold, portrait] = await Promise.all([
  readFile(new URL("node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf", root)),
  readFile(new URL("node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.ttf", root)),
  sharp(new URL("public/images/dayif-portrait-real.webp", root).pathname).png().toBuffer(),
]);
const photo = `data:image/png;base64,${portrait.toString("base64")}`;

for (const [language, title, subtitle] of [
  ["fr", "Ingénieur", "full-stack."],
  ["en", "Software", "engineer."],
]) {
  const card = h("div", {
    style: { width: "100%", height: "100%", display: "flex", background: "#F6F3ED", color: "#152645", fontFamily: "Geist", position: "relative" },
  },
  h("div", { style: { position: "absolute", left: 64, top: 42, display: "flex", fontSize: 34, fontWeight: 600, letterSpacing: -2 } },
    "dayifour", h("span", { style: { color: "#2C5BEA" } }, ".")),
  h("div", { style: { position: "absolute", left: 64, top: 169, display: "flex", flexDirection: "column" } },
    h("div", { style: { fontSize: 19, marginBottom: 24 } }, "Sekou Dayifourou Keita"),
    h("div", { style: { fontSize: 90, lineHeight: 1.02, letterSpacing: -5, fontWeight: 600 } }, title),
    h("div", { style: { fontSize: 90, lineHeight: 1.08, letterSpacing: -5, fontWeight: 600, color: "#2C5BEA" } }, subtitle),
    h("div", { style: { marginTop: 28, fontSize: 20, letterSpacing: 2 } }, "WEB / API / CLOUD")),
  h("div", { style: { position: "absolute", right: 64, top: 65, width: 360, height: 450, display: "flex", borderRadius: 32, overflow: "hidden" } },
    h("img", { src: photo, width: 360, height: 450, style: { objectFit: "cover" }, alt: "" })),
  h("div", { style: { position: "absolute", bottom: 43, left: 64, right: 64, paddingTop: 22, display: "flex", justifyContent: "space-between", borderTop: "1px solid #C9C4BA", fontSize: 19 } },
    h("span", null, "dayifour.dev"), h("span", null, "Mali")));

  const response = new ImageResponse(card, {
    width: 1200, height: 630,
    fonts: [
      { name: "Geist", data: regular, weight: 400, style: "normal" },
      { name: "Geist", data: bold, weight: 600, style: "normal" },
    ],
  });
  const jpeg = await sharp(Buffer.from(await response.arrayBuffer())).jpeg({ quality: 90, mozjpeg: true }).toBuffer();
  await writeFile(new URL(`public/og-portrait-${language}.jpg`, root), jpeg);
  console.log(`Generated og-portrait-${language}.jpg (${jpeg.length} bytes)`);
}
