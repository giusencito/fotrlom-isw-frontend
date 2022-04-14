import { Component, OnInit,Input } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { PersonService } from 'src/app/services/person/person.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  customTitle: string;
  @Input()
  customText !: Comment;
   //change

  userInfo: any;

realname!:string
lastname!:string
text!:string
  constructor(private userService: PersonService) {
    this.customTitle = "...";
  
   
  }

  ngOnInit(): void { //changed all inside this
this.realname=this.customText.person.realname
    this.lastname=this.customText.person.lastname
    this.text=this.customText.commentdescription 

    
  }

}
