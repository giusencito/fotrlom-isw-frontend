import { FanaticService } from 'src/app/services/fanatic/fanatic.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token/token.service';
import { ArtistService } from '../services/artist/artist.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  realRol!: string;
  
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private servicefana:FanaticService,
    private serivcearti:ArtistService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.tokenService.isLogged()) {

      const expectedRol = next.data.expectedRol;
      this.realRol = this.tokenService.isfanatic() ? 'Role_Fanatic' : 'Role_Artist';
      
      

           if(this.realRol=='Role_Fanatic'){
            this.servicefana.getByname(this.tokenService.getUserName()).subscribe((response:any)=>{

              this.router.navigate([`/HomeFanatic/${response.id}`]);
              return false;
            })
           }
           if(this.realRol=='Role_Artist'){

            this.serivcearti.getByname(this.tokenService.getUserName()).subscribe((response:any)=>{

              console.log("ya es artista")
              this.router.navigate([`/HomeArtist/${response.id}`]);
              return false;
            })




           
      
     
      }
    }
    console.log("ingresados")
    return true;
  }
  



}
