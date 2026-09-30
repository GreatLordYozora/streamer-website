export interface CalendarEvent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  time: string;
  type: "Contenido" | "Lanzamiento" | "Directo" | "Especial";
  image?: string;
  platformUrl?: string;
  platformName?: string;
}

export interface CalendarData {
  title: string;
  subtitle: string;
  events: CalendarEvent[];
}

export function formatEventDate(dateString: string): string {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const dayNumber = date.getDate();
  const monthName = date.toLocaleString("es-ES", { month: "long" });

  const capitalizedMonth =
    monthName.charAt(0).toUpperCase() + monthName.slice(1);

  return `${dayNumber} de ${capitalizedMonth}`;
}

export const calendarData: CalendarData = {
  title: "Calendario de Eventos",
  subtitle:
    "Revisa los próximos streams, lanzamientos y eventos de la comunidad",

  events: [
    {
      id: 1,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2026-09-03",
      time: "20:00",
      type: "Directo",
      image: "src/assets/placeholders/thumbnails/thumbnail-01.webp",
      platformUrl: "https://twitch.tv/",
      platformName: "Twitch",
    },
    {
      id: 2,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      date: "2026-09-11",
      time: "18:00",
      type: "Lanzamiento",
      image: "src/assets/placeholders/thumbnails/thumbnail-02.webp",
      platformUrl: "https://youtube.com/",
      platformName: "YouTube",
    },
    {
      id: 3,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      date: "2026-09-24",
      time: "15:00",
      type: "Especial",
      image: "src/assets/placeholders/thumbnails/thumbnail-03.webp",
      platformUrl: "https://twitch.tv/",
      platformName: "Twitch",
    },
    {
      id: 4,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      date: "2026-10-02",
      time: "21:00",
      type: "Contenido",
      image: "src/assets/placeholders/thumbnails/thumbnail-04.webp",
      platformUrl: "https://youtube.com/",
      platformName: "YouTube",
    },
    {
      id: 5,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      date: "2026-10-09",
      time: "17:00",
      type: "Directo",
      image: "src/assets/placeholders/thumbnails/thumbnail-05.webp",
      platformUrl: "https://twitch.tv/",
      platformName: "Twitch",
    },
    {
      id: 6,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras tincidunt, lorem eget tincidunt consequat, justo.",
      date: "2026-10-18",
      time: "19:30",
      type: "Lanzamiento",
      image: "src/assets/placeholders/thumbnails/thumbnail-06.webp",
      platformUrl: "https://youtube.com/",
      platformName: "YouTube",
    },
    {
      id: 7,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
      date: "2026-10-29",
      time: "16:00",
      type: "Especial",
      image: "src/assets/placeholders/thumbnails/thumbnail-07.webp",
      platformUrl: "https://twitch.tv/",
      platformName: "Twitch",
    },
    {
      id: 8,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      date: "2026-11-05",
      time: "20:30",
      type: "Contenido",
      image: "src/assets/placeholders/thumbnails/thumbnail-08.webp",
      platformUrl: "https://youtube.com/",
      platformName: "YouTube",
    },
    {
      id: 9,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      date: "2026-11-14",
      time: "18:30",
      type: "Directo",
      image: "src/assets/placeholders/thumbnails/thumbnail-09.webp",
      platformUrl: "https://twitch.tv/",
      platformName: "Twitch",
    },
    {
      id: 10,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      date: "2026-11-27",
      time: "14:00",
      type: "Lanzamiento",
      image: "src/assets/placeholders/thumbnails/thumbnail-10.webp",
      platformUrl: "https://youtube.com/",
      platformName: "YouTube",
    },
    {
      id: 11,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum.",
      date: "2026-12-04",
      time: "22:00",
      type: "Especial",
      image: "src/assets/placeholders/thumbnails/thumbnail-11.webp",
      platformUrl: "https://twitch.tv/",
      platformName: "Twitch",
    },
    {
      id: 12,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2026-12-12",
      time: "19:00",
      type: "Directo",
      image: "src/assets/placeholders/thumbnails/thumbnail-01.webp",
      platformUrl: "https://twitch.tv/",
      platformName: "Twitch",
    },
    {
      id: 13,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      date: "2026-12-20",
      time: "16:30",
      type: "Contenido",
      image: "src/assets/placeholders/thumbnails/thumbnail-02.webp",
      platformUrl: "https://youtube.com/",
      platformName: "YouTube",
    },
    {
      id: 14,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      date: "2027-01-07",
      time: "20:00",
      type: "Lanzamiento",
      image: "src/assets/placeholders/thumbnails/thumbnail-03.webp",
      platformUrl: "https://youtube.com/",
      platformName: "YouTube",
    },
    {
      id: 15,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      date: "2027-01-18",
      time: "18:00",
      type: "Directo",
      image: "src/assets/placeholders/thumbnails/thumbnail-04.webp",
      platformUrl: "https://twitch.tv/",
      platformName: "Twitch",
    },
    {
      id: 16,
      title: "Lorem Ipsum Dolor",
      subtitle: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      date: "2027-01-29",
      time: "21:30",
      type: "Especial",
      image: "src/assets/placeholders/thumbnails/thumbnail-05.webp",
      platformUrl: "https://twitch.tv/",
      platformName: "Twitch",
    },
  ],
};
