import { EmailPasswordService } from './../../../services/email-password/EmailPassword.service';
import { ChangePasswordDTO } from './../../../models/ChangePasswordDTO';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  password!: string;
  confirmPassword!: string;
  tokenPassword!: string;

  dto!: ChangePasswordDTO;
  constructor(
    private emailPasswordService: EmailPasswordService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.dto={}as ChangePasswordDTO
  }

  ngOnInit() {
  }
  onChangePassword(){
    if(this.password !== this.confirmPassword) {
      alert("Las contraseñas no coinciden")
    }

    this.tokenPassword = this.activatedRoute.snapshot.params.tokenPassword;
    this.dto.password=this.password
    this.dto.confirmPassword=this.confirmPassword
    this.dto.tokenPassword=this.tokenPassword
    this.emailPasswordService.changePassword(this.dto).subscribe(data=>
      {
        alert("contraseña cambiada")
        this.router.navigate(['/login']);
      },
      err =>{
        alert(err.error.mensaje)
      })










  }
}
