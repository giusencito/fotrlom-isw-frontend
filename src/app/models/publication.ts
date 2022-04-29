import { Artist } from './artist';
export interface Publication {

      id:number
      publicationName:string;
      publicationDescription:string;
      likes:number;
      date:Date;
      artist:Artist
}
