import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FanaticService } from 'src/app/services/fanatic/fanatic.service';
import { TokenService } from 'src/app/services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class FanaticGuard implements CanActivate {
  realRol!: string;
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private serivcearti:FanaticService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    this.realRol = this.tokenService.isfanatic() ? 'Role_Fanatic' : 'Role_Artist';
    if (!this.tokenService.isLogged() || expectedRol.indexOf(this.realRol) < 0) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  
}
