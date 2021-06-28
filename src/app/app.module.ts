import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { CommanComponent } from './comman/comman.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingComponent } from './booking/booking.component';
import { PassengerComponent } from './passenger/passenger.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    CommanComponent,
    SignupComponent,
    LoginComponent,
    BookingComponent,
    PassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,FormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
