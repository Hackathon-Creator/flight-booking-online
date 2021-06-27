import { Component, Input, OnInit } from '@angular/core';
 import { NouisliderModule } from 'ng2-nouislider';
import { FlightModel } from './../interface/FlightModel';
//import { FlightService } from './../service/flight.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {BookingflightService} from "./../bookingflight.service"

import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  fromcity : string ;
  tocity : string ;
  flightClass : string ;
  departDate : string ;
  returnDate : string ;

 

  constructor(private router: Router,public flightDetails:BookingflightService) { }

  ngOnInit() {
  }
  processData(){
    this.flightDetails.setFromcity(this.fromcity);
    this.flightDetails.setTocity(this.tocity);
    this.flightDetails.setFromDate(this.departDate);
    this.flightDetails.setToDate(this.returnDate);
    this.router.navigate(['booking']);
   
  }
}