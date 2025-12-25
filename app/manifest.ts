import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Akpu Students Union (ASU)",
    short_name: "ASU",
    description:
      "A well-recognized and respected student body representing indigenous students of Akpu Town across various academic institutions in Nigeria.",
    start_url: "/",
    display: "standalone",
    background_color: "#1e3a5f",
    theme_color: "#1e3a5f",
    icons: [
      {
        src: "/asu-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
