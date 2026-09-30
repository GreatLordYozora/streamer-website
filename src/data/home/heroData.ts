import type { ImageMetadata } from "astro";
import heroImage from "../../assets/hero.webp";
export interface HeroData {
  welcomeMessage: string;
  title: string;
  subtitle: string;
  description: string;
  image: ImageMetadata;
}

export interface HeroNavItem {
  text: string;
  icon: string;
  url: string;
}

export const heroData: HeroData = {
  welcomeMessage: "Lorem ipsum dolor sit",
  title: "Lorem ipsum dolor sit",
  subtitle: "Lorem ipsum dolor sit",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: heroImage,
};

export const heroNavData: HeroNavItem[] = [
  {
    text: "Sígueme en Twitch",
    icon: "social/twitch",
    url: "https://twitch.tv",
  },
  {
    text: "Suscríbete en YouTube",
    icon: "social/youtube",
    url: "https://youtube.com",
  },
  {
    text: "Sígueme en TikTok",
    icon: "social/tiktok",
    url: "https://tiktok.com",
  },
  {
    text: "Sígueme en X",
    icon: "social/x",
    url: "https://x.com",
  },
];
