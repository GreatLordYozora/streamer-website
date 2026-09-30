export interface LinkItem {
  title: string;
  description: string;
  icon: string;
  url: string;
}

export interface LinksSubsection {
  title: string;
  links: LinkItem[];
}

export interface LinksData {
  title: string;
  subtitle: string;
  subsections: LinksSubsection[];
}

export const linksData: LinksData = {
  title: "Mis Enlaces",
  subtitle: "Encuéntrame en todas mis plataformas y redes",
  subsections: [
    {
      title: "Plataformas Principales",
      links: [
        {
          title: "Twitch",
          description: "Mira mis directos y sígueme en Twitch",
          icon: "social/twitch",
          url: "https://twitch.tv",
        },
        {
          title: "YouTube",
          description: "Mira mis videos, clips y contenido",
          icon: "social/youtube",
          url: "https://youtube.com",
        },
        {
          title: "Kick",
          description: "Acompáñame en mis directos de Kick",
          icon: "social/kick",
          url: "https://kick.com",
        },
      ],
    },
    {
      title: "Redes Sociales",
      links: [
        {
          title: "X (Twitter)",
          description: "Entérate de las novedades y anuncios",
          icon: "social/x",
          url: "https://x.com",
        },
        {
          title: "Instagram",
          description: "Fotos, historias y contenido random",
          icon: "social/instagram",
          url: "https://instagram.com",
        },
        {
          title: "TikTok",
          description: "Clips, momentos divertidos y contenido corto",
          icon: "social/tiktok",
          url: "https://tiktok.com",
        },
        {
          title: "Threads",
          description: "Pensamientos, novedades y contenido diario",
          icon: "social/threads",
          url: "https://threads.net",
        },
        {
          title: "Steam",
          description: "Mira a qué estoy jugando y agrégame",
          icon: "social/steam",
          url: "https://steamcommunity.com",
        },
        {
          title: "Reddit",
          description: "Únete a mi comunidad en Reddit",
          icon: "social/reddit",
          url: "https://reddit.com",
        },
        {
          title: "Wattpad",
          description: "Lee las boludeces que escribo",
          icon: "social/wattpad",
          url: "https://wattpad.com",
        },
        {
          title: "Discord",
          description: "Únete al servidor y charla con la comunidad",
          icon: "social/discord",
          url: "https://discord.com",
        },
        {
          title: "WhatsApp",
          description: "Únete a la comunidad de WhatsApp",
          icon: "social/whatsapp",
          url: "https://whatsapp.com",
        },
        {
          title: "Telegram",
          description: "Únete a mi canal de Telegram",
          icon: "social/telegram",
          url: "https://telegram.org",
        },
      ],
    },
    {
      title: "Apoya el Contenido",
      links: [
        {
          title: "Patreon",
          description: "Apoya mi contenido y consigue beneficios",
          icon: "social/patreon",
          url: "https://patreon.com",
        },
        {
          title: "PayPal",
          description: "Apoya directamente la creación de contenido",
          icon: "social/paypal",
          url: "https://paypal.com",
        },
        {
          title: "Ko-fi",
          description: "Invítame un cafecito y apoya el proyecto",
          icon: "social/kofi",
          url: "https://ko-fi.com",
        },
      ],
    },
  ],
};
