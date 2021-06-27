import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {BookingflightService} from "./../bookingflight.service";
import {UserserviceService} from "./../user/userservice.service";
import filghtsData from './filghts.json';

interface FlightData {  
  id: Number;  
  fname: String;  
  distance: String;  
  amount: String; 
  fromcity: String;  
  tocity: String;
}  


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  pages = [
    {name:'view', page: 'view'},
    
  ];


  fromcity : string;
  tocity : string;
  flightClass  : string;
  fromDate : string;
  toDate : string;
  name:string;
  age: string;
  mob: string;
  email: string;
  flights=[];
  isBooked=false;
  bookedmsg:string;
  constructor(private route: ActivatedRoute, private router: Router,public flightDetails:BookingflightService,public userserviceService:UserserviceService) { }

  ngOnInit() {
    
    this.getFlights();
  }

  getFlights(){

    this.fromcity=this.flightDetails.getFromcity();
    this.tocity=this.flightDetails.getTocity();
    this.fromDate=this.flightDetails.getFromDate();
    this.toDate=this.flightDetails.getToDate();

    this.name=this.userserviceService.getUsername();
    this.age=this.userserviceService.getAge();
    this.mob=this.userserviceService.getMob();
    this.email=this.userserviceService.getEmail();
    // this.router.navigate(['booking']);
    this.flights=filghtsData;  
    console.log(this.flights);
  }
  Booked(){
    
    this.isBooked=true;
    this.bookedmsg="Booked your filght.."

  }
}
