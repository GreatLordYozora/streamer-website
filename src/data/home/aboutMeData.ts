import type { ImageMetadata } from "astro";
import aboutMeImage from "../../assets/aboutMe.webp";
export interface AboutMeStat {
  value: string;
  title: string;
}

export interface AboutMeData {
  title: string;
  subtitle: string;
  aboutMeTitle: string;
  aboutMeParagraphs: string[];
  birthday: string;
  fanartTag: string;
  stats: AboutMeStat[];
  image: ImageMetadata;
}

export const aboutMeData: AboutMeData = {
  title: "Sobre Mí",
  subtitle: "Lorem ipsum dolor sit amet",
  aboutMeTitle: "Lorem ipsum dolor sit amet",
  aboutMeParagraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  ],
  birthday: "Month Day",
  fanartTag: "#fanarts",
  stats: [
    { value: "100+", title: "Followers" },
    { value: "50+", title: "Subscribers" },
    { value: "200+", title: "Videos" },
  ],
  image: aboutMeImage,
};