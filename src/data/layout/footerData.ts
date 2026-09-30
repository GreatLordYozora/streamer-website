import avatar from "../../assets/avatar.webp"

export interface FooterData {
  avatar: ImageMetadata;
  description: string;
  mail: string;
  companyHQ: string;
  brandName: string;
  dev: string;
  devUrl: string;
}

export interface FooterSocialItem {
  icon: string;
  title:string;
  url: string;
}

export interface NavLink {
  title: string;
  url: string;
  icon?: string;
}

export interface FooterNavGroup {
  title: string;
  nav: NavLink[];
}

export const footerData: FooterData = {
  avatar: avatar,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  mail: "examplemail@mail.com",
  companyHQ: "Argentina",
  brandName: "Lorem ipsum",
  dev: "Yozora",
  devUrl: "https://github.com/GreatLordYozora",
};

export const footerSocialNavData: FooterSocialItem[] = [
  { icon: "social/twitch",title:"Twitch", url: "https://www.twitch.tv/" },
  { icon: "social/youtube",title:"Youtube", url: "https://www.youtube.com/" },
  { icon: "social/kick",title:"Kick", url: "https://kick.com/" },
  { icon: "social/tiktok",title:"TikTok", url: "https://www.tiktok.com/" },
  { icon: "social/x",title:"X", url: "https://x.com/" },
];

export const footerNavData: FooterNavGroup[] = [
  {
    title: "Quick Links",
    nav: [
      { title: "Home", url: "/#home" },
      { title: "About Me", url: "/#about-me" },
      { title: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Follow Me",
    nav: [
      { title: "X (Twitter)", url: "https://x.com/" },
      { title: "Kick", url: "https://kick.com/" },
      { title: "Instagram", url: "https://www.instagram.com/" },
      { title: "TikTok", url: "https://www.tiktok.com/" },
      { title: "YouTube", url: "https://www.youtube.com/" },
      { title: "Telegram", url: "https://web.telegram.org/" },
      { title: "Facebook", url: "https://www.facebook.com/" },
    ],
  },
];