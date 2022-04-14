import { Component, OnInit,Input } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { PersonService } from 'src/app/services/person/person.service';

@Component({
  selector: 'app-UserInformationforForum',
  templateUrl: './UserInformationforForum.component.html',
  styleUrls: ['./UserInformationforForum.component.css']
})
export class UserInformationforForumComponent implements OnInit {

  user!:Person
  username!:string
  userlastname!:string
  @Input() idcomment!:number
  constructor(private service:PersonService) {
    this.user={}as Person

  }


  ngOnInit() {
   this.getidUser(this.idcomment)



  }
getidUser(id:number){
  console.log("scan");
    this.service.getById(id).subscribe((response:any)=>{

      this.user=response;
       console.log(this.user);
       this.username=this.user.realname
       this.userlastname=this.user.lastname;

    });


  }


}
