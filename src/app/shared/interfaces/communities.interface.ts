export type Communities = Record<string, Community>;

export interface Community {
  id: number;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  image: string;
  twitter: string;
  web: string;
  description: string;
  organizers: Organizer[];
}
interface Organizer {
  name: string;
  twitter: string;
  github: string;
  webs: string[];
}
