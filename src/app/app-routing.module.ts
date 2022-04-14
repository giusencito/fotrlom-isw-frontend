import { ChangePasswordComponent } from './pages/ForgotPassword/change-password/change-password.component';
import { RegisterFanaticComponent } from './pages/Register/RegisterFanatic/RegisterFanatic.component';
import { RegisterArtistComponent } from './pages/Register/RegisterArtist/RegisterArtist.component';
import { FanaticGuard } from './guard/fanatic/fanatic.guard';
import { ArtistGuard } from './guard/artist/artist.guard';
import { ConfigurationArtistComponent } from './pages/configuration/configuration-artist/configuration-artist.component';
import { ArtistEventComponent } from './pages/Artists/ArtistEvent/ArtistEvent.component';
import { ConfigurationFanaticComponent } from './pages/configuration/configuration-fanatic/configuration-fanatic.component';
import { ArtistListComponent } from './pages/Fanatic/artist-list/artist-list.component';
import { ForumPageComponent } from './pages/ForumPage/ForumPage.component';
import { FanaticForumCreateComponent } from './pages/Fanatic/FanaticForumCreate/FanaticForumCreate.component';
import { FanaticForumComponent } from './pages/Fanatic/Fanatic-Forum/Fanatic-Forum.component';
import { EventFanaticComponent } from './pages/Fanatic/EventFanatic/EventFanatic.component';
import { HomeFanaticComponent } from './pages/Fanatic/HomeFanatic/HomeFanatic.component';
import { ArtistForumsComponent } from './pages/Artists/artist-forums/artist-forums.component';
import { HomeArtistComponent } from './pages/Artists/home-artist/home-artist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './pages/publication/post-page/post-page.component';
import { LoginComponent } from './pages/Login/Login.component';
import { LoginGuard } from './guard/login.guard';
import { SendEmailComponent } from './pages/ForgotPassword/send-email/send-email.component';

const routes: Routes = [

  {path:'HomeArtist/:id',component:HomeArtistComponent,canActivate: [ArtistGuard], data: { expectedRol: ['Role_Artist'] } },
  {path:'HomeArtist/:id/ArtistForum',component:ArtistForumsComponent,canActivate: [ArtistGuard], data: { expectedRol: ['Role_Artist'] }},
  {path:'HomeArtist/:id/ArtistForum/CreateForum',component:FanaticForumCreateComponent,canActivate: [ArtistGuard], data: { expectedRol: ['Role_Artist'] }},
  {path:'HomeArtist/:id/ArtistForum/ForumPage/:forumid',component:ForumPageComponent,canActivate: [ArtistGuard], data: { expectedRol: ['Role_Artist'] }},
  {path:'HomeArtist/:id/Event',component:ArtistEventComponent,canActivate: [ArtistGuard], data: { expectedRol: ['Role_Artist'] }},
  {path: 'HomeArtist/:id/posts',component:PostPageComponent,canActivate: [ArtistGuard], data: { expectedRol: ['Role_Artist'] }},
  {path: 'HomeArtist/:id/ConfigureArtist',component:ConfigurationArtistComponent,canActivate: [ArtistGuard], data: { expectedRol: ['Role_Artist'] }},


  {path:'HomeFanatic/:id',component:HomeFanaticComponent,canActivate: [FanaticGuard], data: { expectedRol: ['Role_Fanatic'] }},
  {path:'HomeFanatic/:id/Event',component:EventFanaticComponent,canActivate: [FanaticGuard], data: { expectedRol: ['Role_Fanatic'] }},
  {path:'HomeFanatic/:id/FanaticForum',component:FanaticForumComponent,canActivate: [FanaticGuard], data: { expectedRol: ['Role_Fanatic'] }},
  {path:'HomeFanatic/:id/FanaticForum/CreateForum',component:FanaticForumCreateComponent,canActivate: [FanaticGuard], data: { expectedRol: ['Role_Fanatic'] }},
  {path:'HomeFanatic/:id/FanaticForum/ForumPage/:forumid',component:ForumPageComponent,canActivate: [FanaticGuard], data: { expectedRol: ['Role_Fanatic'] }},
  {path:'HomeFanatic/:id/artists',component:ArtistListComponent,canActivate: [FanaticGuard], data: { expectedRol: ['Role_Fanatic'] }},
  {path: 'HomeFanatic/:id/posts',component:PostPageComponent,canActivate: [FanaticGuard], data: { expectedRol: ['Role_Fanatic'] }},
  {path:'HomeFanatic/:id/ConfigureFanatic',component:ConfigurationFanaticComponent,canActivate: [FanaticGuard], data: { expectedRol: ['Role_Fanatic'] }},


  {path:'',component:LoginComponent,canActivate: [LoginGuard], data: { expectedRol: ['Role_Artist','Role_Fanatic'] }},
  {path:'login',component:LoginComponent,canActivate: [LoginGuard], data: { expectedRol: ['Role_Artist','Role_Fanatic'] }},


  {path:'registerartist',component:RegisterArtistComponent,canActivate: [LoginGuard], data: { expectedRol: ['Role_Artist','Role_Fanatic'] }},
  {path:'registerfanatic',component:RegisterFanaticComponent},
  { path: 'sendemail', component: SendEmailComponent, canActivate: [LoginGuard] , data: { expectedRol: ['Role_Artist','Role_Fanatic'] }},
  { path: 'change-password/:tokenPassword', component: ChangePasswordComponent, canActivate: [LoginGuard], data: { expectedRol: ['Role_Artist','Role_Fanatic'] } },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
