import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/models/Person';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { PersonService } from 'src/app/services/person/person.service';
import { NewArtist } from 'src/app/models/NewArtist';
import { LoginUser } from 'src/app/models/LoginUser';

@Component({
  selector: 'app-RegisterArtist',
  templateUrl: './RegisterArtist.component.html',
  styleUrls: ['./RegisterArtist.component.css']
})
export class RegisterArtistComponent implements OnInit {

  public signupform!:FormGroup;
  dataSource !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  user!:NewArtist;
  artist!:Artist
  date!:Date;
  email!:string;
  loginUsuario!: LoginUser;
  constructor(private formBuilder:FormBuilder,private route:Router,private service:AuthService,private service2:PersonService) {
    this.user={}as NewArtist;
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    this.artist={} as Artist
    this.loginUsuario={}as LoginUser
    this.date=new Date()
   }
   ngOnInit() {
    console.log(this.date)
    this.signupform=this.formBuilder.group({
      name:['',Validators.required],
      username:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],

     })
     
     console.log(this.user)
  }


 







  
  registerArtist(){

    this.service.RegisterArtist(this.user).subscribe((response: any) => {
      alert("cuenta creada")
      this.route.navigate(['/login']);



      
    },err=>{
      alert("datos ya usados")
    });


  }
  


  onSubmit(){

  console.log(this.signupform.value.email)

   this.registerArtist()
  //this.signupform.reset();
   //this.route.navigate(['/login'])

  }

}
