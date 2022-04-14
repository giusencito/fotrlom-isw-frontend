import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { Rate } from 'src/app/models/rate';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { FanaticService } from 'src/app/services/fanatic/fanatic.service';
import { FollowService } from 'src/app/services/follow/follow.service';
import { RateService } from 'src/app/services/rate/rate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Follow } from 'src/app/models/follow';
@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artistList!: any;
  rate!:Rate
  val!: number
  idnumber!:number
  value = 0;
  constructor(private artistService: ArtistService, private rateService:RateService,private followService:FollowService,private fanaticservice:FanaticService,private route:ActivatedRoute) {
    this.rate={}as Rate;
   }

  ngOnInit(): void {
    this.getArtists();
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.idnumber=id;
  }

  getArtists(){
    this.artistService.getAll().subscribe((response: any) => {
      this.artistList = response.content;
      console.log("Artistas")
      console.log(this.artistList)
    });
  }

  item!:Follow;
  follow(artist: Artist) {
    console.log('artist id to follow: ' + artist.id);
    artist.artistfollowers++;
    console.log(artist)
    this.artistService.update(artist.id, artist).subscribe((response: any) => {
      console.log(response);
    
      this.followService.create(this.idnumber,artist.id,this.item).subscribe((response: any)=>{

      })
      this.artistList = this.artistList.map((o: Artist) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });

    });
  }
  unfollow(artist: Artist) {
    console.log('artist id to follow: ' + artist.id);
    artist.artistfollowers--;
    console.log(artist)
    this.artistService.update(artist.id, artist).subscribe((response: any) => {
      console.log(response);
    

      this.artistList = this.artistList.map((o: Artist) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });

    });
  }
  new_rate( aId: number){
    console.log('rate:' + aId)
    this.rate.rates=aId;



  }



  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    this.val = value;
    return value;
  }


  



}
