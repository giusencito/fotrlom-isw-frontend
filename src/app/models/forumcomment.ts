import { Forum } from './forum';
import { Person } from "./Person";

export interface Forumcomment {

      id:number;

      commentdescription:string;

     registerdate:Date;

     person:Person;

      forum:Forum;


}
