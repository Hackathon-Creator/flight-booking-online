import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CommanComponent } from './comman/comman.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { PassengerComponent } from './passenger/passenger.component';
const routes: Routes = [
{ path:'comman', component: CommanComponent},
{path:'welcome-admin', component: AdminComponent},
{path:'user', component: UserComponent},
{path:'', component: LoginComponent},
{path:'signup', component:SignupComponent},
{path:'booking', component:BookingComponent},
{path:'passenger', component:PassengerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
