import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "橘香堂 - 富士市吉原の多目的レンタルスペース",
    short_name: "橘香堂",
    description:
      "富士市吉原の多目的レンタルスペース。ヨガ・ダンススタジオ、ギャラリー、コワーキングスペースとして利用可能。",
    start_url: "/",
    display: "standalone",
    background_color: "#1F1F1F",
    theme_color: "#F59E0B",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["business", "productivity", "lifestyle"],
    lang: "ja",
  };
}
