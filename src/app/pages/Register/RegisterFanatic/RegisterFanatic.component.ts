import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NewFanatic } from 'src/app/models/NewFanatic';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-RegisterFanatic',
  templateUrl: './RegisterFanatic.component.html',
  styleUrls: ['./RegisterFanatic.component.css']
})
export class RegisterFanaticComponent implements OnInit {

  public signupform!:FormGroup;
  dataSource !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  user!:NewFanatic;
  
  date!:Date;
  constructor(private formBuilder:FormBuilder,private route:Router,private service:AuthService,) {
    this.user={}as NewFanatic;
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    this.date=new Date()
   }


  ngOnInit() {console.log(this.date)
    this.signupform=this.formBuilder.group({
      name:['',Validators.required],
      username:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      alias:['',Validators.required],

     })
     
  }
 

  


  registerFanatic(){


    this.service.RegisterFanatic(this.user).subscribe((response: any) => {
      this.signupform.reset();
      alert("cuenta creada")
      this.route.navigate(['/login']);
    },err=>{
      alert("datos ya usados")
    });


  }

  onSubmit(){

   
    this.registerFanatic()
   

  }

}
