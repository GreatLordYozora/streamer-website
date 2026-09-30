import avatar from "../../assets/avatar.webp";

export interface HeaderLink {
  url: string;
  label: string;
}

export interface HeaderData {
  avatar: ImageMetadata;
  creator: string;
  links: HeaderLink[];
}

export const headerData: HeaderData = {
  avatar: avatar,
  creator: "lorem ipsum",
  links: [
    { url: "/#home", label: "Home" },
    { url: "/#about-me", label: "About Me" },
    { url: "/contact", label: "Contact" },
  ],
};
