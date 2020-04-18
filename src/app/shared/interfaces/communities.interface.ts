export type Communities = Record<string, Community>;

export interface Community {
  id: number;
  position: {
    lat: number;
    lng: number;
  };
  image: string;
  twitter: string;
  web: string;
  organizers: Organizer[];
}
interface Organizer {
  name: string;
  twitter: string;
  webs: string[];
}
