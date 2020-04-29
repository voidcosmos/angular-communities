export type Communities = Record<string, Community>;

export interface Community {
  id: number;
  name: string;
  position: google.maps.LatLngLiteral;
  city: string;
  image: string;
  twitter: string;
  web: string;
  youtube: string;
  description: string;
  organizers: Organizer[];
}

interface Organizer {
  name: string;
  twitter: string;
  github: string;
  linkedin: string;
  webs: string[];
}
