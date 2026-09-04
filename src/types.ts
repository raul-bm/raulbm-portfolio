export type MediaItem = {
  label: string;
  type: "captura" | "gif" | "video";
  src?: string;
};
export type Project = {
  id: string;
  inProgress: boolean;
  featured: boolean;
  year: string;
  tech: string[];
  links?: { demo?: string; repo?: string; video?: string };
  media: MediaItem[];
  hue: number;
};
