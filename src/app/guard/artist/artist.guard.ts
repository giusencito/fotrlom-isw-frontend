import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { TokenService } from 'src/app/services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistGuard implements CanActivate {
  realRol!: string;
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private serivcearti:ArtistService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    this.realRol = this.tokenService.isartist() ? 'Role_Artist' : 'Role_Fanatic';
    if (!this.tokenService.isLogged() || expectedRol.indexOf(this.realRol) < 0) {
      this.router.navigate(['/']);
      return false;
    }
    console.log("es artista")
    return true;
  }
  
}
