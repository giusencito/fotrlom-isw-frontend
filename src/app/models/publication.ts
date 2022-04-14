import { Artist } from './artist';
export interface Publication {

      id:number
      publicationName:string;
      publicationdescription:string;
      likes:number;
      date:Date;
      artist:Artist
}
