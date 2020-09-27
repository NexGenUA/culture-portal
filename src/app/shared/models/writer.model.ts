export interface ITimelineItem {
  year: number;
  event: string;
}

interface IBook {
  year: number;
  title: string;
}

interface IImage {
  img: string;
  alt: string;
}

export interface IVideo {
  link: string;
  description: string;
}

export interface IWritter {
  id: number;
  name: string;
  surname: string;
  patronymic?: string;
  birthdate: string;
  deathDate: string;
  city?: string;
  country?: string;
  shortDescription: string;
  timeline: ITimelineItem[];
  books: IBook[];
  gallery: IImage[];
  videos: IVideo[];
  map: string[];
}
