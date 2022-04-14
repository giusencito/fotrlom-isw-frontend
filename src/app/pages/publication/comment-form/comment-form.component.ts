import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import { CommentService } from 'src/app/services/comment/comment.service';
import { Comment } from 'src/app/models/comment';
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input()
  postId: any

  commentData: Comment;
  dataSource: MatTableDataSource<any>;

  constructor(private commentService : CommentService,
              private $route: ActivatedRoute) {
    this.commentData={}as Comment;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
  }

  postComment(txt: HTMLTextAreaElement): void {
    let today = new Date(); //change
    let user=parseInt(this.$route.snapshot.paramMap.get('id')!);
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); //change
    this.commentData.commentdescription = txt.value;
    //this.commentData.PublicationID = this.postId;
    this.commentData.registerdate = today; //change
    this.commentService.create(this.commentData, user, this.postId).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o:any)=>{return o;});
    },err=>{
      alert("ponga un comentario")
    });
    txt.value = "";
  }

}
