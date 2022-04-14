import { Person } from "./Person";

export interface Report {
      id:number;

      reportDescription:string

      userMain:Person;


      userReported:Person;
}
