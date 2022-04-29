import { Component, OnInit } from '@angular/core';
import { EmailValues } from 'src/app/models/email-values';
import { EmailPasswordService } from 'src/app/services/email-password/EmailPassword.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {


  mailTo!: string;
  dto!: EmailValues;

  constructor( private emailPasswordService: EmailPasswordService) { 
    this.dto={} as EmailValues

  }

  ngOnInit() {
  }
  onSendEmail(){
    this.dto.mailTo=this.mailTo;
    this.emailPasswordService.sendEmail(this.dto).subscribe(
      data => {
          
           //alert("Email enviado")
      },
      err => {
        
        alert("Email no valido")
      }
    );









  }
}
