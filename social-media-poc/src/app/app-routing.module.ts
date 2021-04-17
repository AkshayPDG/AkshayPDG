import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './home/login/login.component';
import { LogoutComponent } from './home/logout/logout.component';
import { PublishBoardComponent } from './post/publish-board/publish-board.component';
import { PublishStatusComponent } from './post/publish-status/publish-status.component';
import { SocialMediaSelectorComponent } from './post/social-media-selector/social-media-selector.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'social-media-selector', component: SocialMediaSelectorComponent, canActivate: [AuthGuardService]},
  {path: 'publish-media', component: PublishBoardComponent, canActivate: [AuthGuardService]},
  {path: 'publish-status', component: PublishStatusComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
