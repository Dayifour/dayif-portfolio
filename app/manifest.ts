import type { MetadataRoute } from "next";
import { brandColors } from "@/lib/design-tokens";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sekou Dayifourou Keita — Portfolio",
    short_name: "Dayifour",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: brandColors.paper,
    theme_color: brandColors.blue,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
