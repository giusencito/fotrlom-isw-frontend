import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const Token_key='AuthToken';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token !: string
  roles:Array<string>=[]
  constructor(private Router:Router) { }
  public setToken(token:string):void {
  
  window.localStorage.removeItem(Token_key);
  window.localStorage.setItem(Token_key,token)
  
  }
  public getToken() {
  
    return window.localStorage.getItem(Token_key)
  
  
  }
  public getUserName()  {
    if (!this.isLogged()) {
      return null;
    }
    const token = this.getToken()!;
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const username = values.sub;
    return username;
  }

  public isLogged(){
  
  if(this.getToken()){return true}
  else{return false}
  
  }

  public isfanatic(): boolean {
    if (!this.isLogged()) {
      return false;
    }
    const token = this.getToken()!;
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;
    if (roles.indexOf('Role_Fanatic') < 0) {
      return false;
    }
    return true;
  }

  public isartist(): boolean {
    if (!this.isLogged()) {
      return false;
    }
    const token = this.getToken()!;
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;
    if (roles.indexOf('Role_Artist') < 0) {
      return false;
    }
    return true;
  }


  public logOut(): void {
    window.localStorage.clear();
    this.Router.navigate(['/login']);
  }










}
