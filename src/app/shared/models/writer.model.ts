interface ITimelineItem {
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

interface IVideo {
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
  shortDescription: string;
  timeline: ITimelineItem[];
  books: IBook[];
  gallery: IImage[];
  videos: IVideo[];
  map: string[];
}

export class Writer {
  constructor(
    public id: string,
    public name: string,
    public surname: string,
    public birthdate: string,
    public deathDate: string,
    public shortDescription: string,
    public timeline: ITimelineItem[],
    public books: IBook[],
    public gallery: IImage[],
    public videos: IVideo[],
    public map: string[],
    public patronymic?: string
  ) {}

  public static fromJSON(item: any): Writer {
    return Boolean(item)
    ? new Writer (
      item.id,
      item.name,
      item.surname,
      item.birthdate,
      item.deathDate,
      item.shortDescription,
      item.timeline,
      item.books,
      item.gallery,
      item.videos,
      item.map,
      item.patronymic)
    : null;
  }
}
