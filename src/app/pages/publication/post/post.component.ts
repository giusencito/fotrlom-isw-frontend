import { HttpClient } from '@angular/common/http';
import { Multimedia } from './../../../models/multimedia';
import { PublicationService } from './../../../services/publication/publication.service';
import { CommentService } from 'src/app/services/comment/comment.service';
import { Person } from 'src/app/models/Person';
import { Component, OnInit,Input } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import { Report } from 'src/app/models/report';
import {ActivatedRoute} from "@angular/router";
import { ReportService } from 'src/app/services/report/report.service';
import { MultimediaService } from 'src/app/services/multimedia/multimedia.service';
import { PersonService } from 'src/app/services/person/person.service';
import { Publication } from 'src/app/models/publication';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  aux: any;
  studentData: any;
  dataSource: MatTableDataSource<any>;
  haveInfo = false;
  havePosts = false;
  report!:Report
  orderedMultimedia !:any[];
  arrayimage:any=[]
  retrieveResonse !: Multimedia;
  relatedUser!: Person;
  postResponse: any;
  dbImage: any; 
name!:string 
lastname!:string
descripcion!:string
  @Input()
  textPart = "...";
  @Input()
  titlePart = "...";
  @Input()
  fullPost !: Publication;
  base64Data: any;
  retrievedImage: any;
  constructor(private commentService: CommentService,
              private postService: PublicationService,
              private reportService: ReportService,
              private multimediaService: MultimediaService,
              private usuarioservice: PersonService,
              private httpClient:HttpClient,
              private $route: ActivatedRoute) {
    this.report={}as Report
    this.studentData = {}
    this.dataSource = new MatTableDataSource<any>();
    this.haveInfo = false;
    this.havePosts = false;
  }

  ngOnInit(): void {
    
    this.name=this.fullPost.artist.realname;
    this.lastname=this.fullPost.artist.lastname
    this.descripcion=this.fullPost.publicationdescription

   
    this.multimediaService.getallmultimediabypublication(this.fullPost.id).subscribe((response:any)=>{

        console.log(response.length)
         for (var char of response){
          this.dbImage = 'data:image/jpeg;base64,' + char.image
           this.arrayimage.push( this.dbImage)
           
         }
         console.log(this.arrayimage)


    })


    


    this.usuarioservice.getById(this.fullPost.artist.id)
      .subscribe((response: any) => {
        this.relatedUser = response;
       
      })
  }







  likePost(): void {
    this.fullPost.likes += 1;
    this.postService.update(this.fullPost.id, this.fullPost)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  getComments(): void {
    
    
    this.commentService.getallcommentsbypublication(this.fullPost.id).subscribe((response: any) => {
      this.dataSource.data = response.content;
      console.log(this.dataSource.data)
      this.studentData = this.dataSource.data;
      //this.haveInfo = true;
      this.havePosts = true;
    });
    



  }

  flagPost(): void {
    this.aux = {
      ReportDescription: "Insultos frecuentes",
      UserMain: +this.$route.snapshot.params['id'],
      PostReported: this.fullPost.id
    }
    this.report.reportDescription="publicacion inapropiada"
    this.reportService.create(this.report,+this.$route.snapshot.params['id'],this.relatedUser.id)
      .subscribe((response: any) => {
        console.log(response);
      });
  }










}