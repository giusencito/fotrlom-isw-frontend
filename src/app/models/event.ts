import { Artist } from './artist';
export interface Event {
      id:number
      eventname:string
      eventeescription:string
      eventlikes:number
      registerdate:Date
      artist:Artist
}
