export type MediaItem = {
  label: string;
  type: "captura" | "gif" | "video";
  src?: string;
};
export type Project = {
  id: string;
  title: string;
  category: string;
  inProgress: boolean;
  featured: boolean;
  role: string;
  year: string;
  short: string;
  description: string[];
  tech: string[];
  links?: { demo?: string; repo?: string; video?: string };
  media: MediaItem[];
  hue: number;
};
