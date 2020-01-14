import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component'
import { RegisterComponent } from '../app/components/register/register.component'
import { RoomsAvailableComponent } from '../app/components/rooms-available/rooms-available.component'

const routes: Routes = [
  { path: '', component: LoginComponent,  pathMatch: 'full'},
  { path: 'register', component: RegisterComponent},
  { path: 'rooms-available', component: RoomsAvailableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
