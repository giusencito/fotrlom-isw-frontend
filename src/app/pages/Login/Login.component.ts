import { Fanatic } from 'src/app/models/fanatic';
import { Artist } from 'src/app/models/artist';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { PersonService } from 'src/app/services/person/person.service';
import { FanaticService } from 'src/app/services/fanatic/fanatic.service';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { TokenService } from 'src/app/services/token/token.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginUser } from 'src/app/models/LoginUser';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform!:FormGroup;
  iddepaso!:Number;
  dataSource !:MatTableDataSource<any>;
  Artist!:Artist
  errMsj!: string;
  Fanatic!:Fanatic
  loginUsuario!: LoginUser;
  constructor(private formBuilder:FormBuilder,private route:Router,private service:PersonService,private servicefana:FanaticService,private serivcearti:ArtistService,
    private tokenService: TokenService,
    private authService: AuthService,) {
    this.dataSource = new MatTableDataSource<any>();
   this.Fanatic={}as Fanatic
   this.loginUsuario={}as LoginUser
   this.Artist={}as Artist
   }


  ngOnInit() {
    this.loginform=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]



     })
  }
onSubmit(){

  console.log(this.loginform.value.email)
 this.loginUsuario.nombreUsuario=this.loginform.value.email
 console.log()
 this.loginUsuario.password=this.loginform.value.password
 console.log(this.loginUsuario)
 this.authService.LogUser(this.loginUsuario).subscribe(
  data=>{
    this.tokenService.setToken(data.token)
    if(this.tokenService.isartist()==true){
      console.log("es artista")
      this.serivcearti.getByname(this.tokenService.getUserName()).subscribe((response:any)=>{

        
        this.route.navigate([`/HomeArtist/${response.id}`]);
      })
      
    }
    if(this.tokenService.isfanatic()==true){
      console.log("es fanatic")
      this.servicefana.getByname(this.tokenService.getUserName()).subscribe((response:any)=>{

        this.route.navigate([`/HomeFanatic/${response.id}`]);
      })
      
    }
    
    console.log(data.token)
  },
  err=>{
    this.errMsj = err.error.message;
  }



)



  }
getAllUsers(){
    


  }
  getUser(){

    


  }


  getartist(){
  console.log('busqueda de artista')
   this.serivcearti.getAll().subscribe((response: any)=>{

    const ap=response.content.find((a:any)=>{
      console.log('idactual')
        console.log(a.id)
        console.log('requerido')
        console.log(this.iddepaso)
        return  a.id === this.iddepaso



    })

    if(ap){
      alert("Login successfully");
      this.route.navigate(['/HomeArtist',this.iddepaso])

    }






   })



  }
  getfanatic(){
    console.log('busqueda de fanatico')
     this.servicefana.getAll().subscribe((response: any)=>{

      const ap=response.content.find((a:any)=>{
        console.log('idactual')
          console.log(a.id)
          console.log('requerido')
          console.log(this.iddepaso)
      })

      if(ap){
        alert("Login successfully");
        this.route.navigate(['/HomeFanatic',this.iddepaso])

      }






     })



    }

  getidArtist(id:Number){

    this.serivcearti.getById(id).subscribe((response:any)=>{

      this.Artist=response;


    });


  }


}
