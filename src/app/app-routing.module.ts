import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EventComponent } from './dashboard/event/event.component'
import { MovieComponent } from './dashboard/movie/movie.component'
import { AuthGaurd } from './auth/auth-guard.service'
import { LoginAuthGuard } from './auth/login-auth-guard.service'
 
const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginAuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGaurd], children: [
    {path: 'event', component: EventComponent},
    {path: 'movies', component: MovieComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
