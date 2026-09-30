import type { ImageMetadata } from "astro";

import thumbnail04 from "../../assets/placeholders/thumbnails/thumbnail-04.webp";
import thumbnail09 from "../../assets/placeholders/thumbnails/thumbnail-09.webp";
import thumbnail11 from "../../assets/placeholders/thumbnails/thumbnail-11.webp";

export interface FeaturedCard {
  title: string;
  description: string;
  backgroundImage: ImageMetadata;
  duration: string;
  type: string;
  platformUrl: string;
}

export interface FeaturedData {
  title: string;
  subtitle: string;
  cards: FeaturedCard[];
}

export const featuredData: FeaturedData = {
  title: "Lorem ipsum dolor sit amet",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cards: [
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      backgroundImage: thumbnail04,
      duration: "10:45",
      type: "Highlight",
      platformUrl: "https://youtube.com",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      backgroundImage: thumbnail09,
      duration: "25:30",
      type: "Tutorial",
      platformUrl: "https://youtube.com",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.",
      backgroundImage: thumbnail11,
      duration: "02:15",
      type: "VOD",
      platformUrl: "https://twitch.tv",
    },
  ],
};
