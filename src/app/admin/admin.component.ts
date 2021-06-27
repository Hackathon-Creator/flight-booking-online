import { Component, OnInit } from '@angular/core';
import filghtsData from '../booking/filghts.json';
import {UserserviceService} from "./../user/userservice.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  flights=[];
  isBooked=false;
  bookedmsg:string;
  name:string;
  age: string;
  mob: string;
  email: string;
  constructor(public userserviceService:UserserviceService) { }

  ngOnInit(): void {
    this.name=this.userserviceService.getUsername();
    this.age=this.userserviceService.getAge();
    this.mob=this.userserviceService.getMob();
    this.email=this.userserviceService.getEmail();
    this.flights=filghtsData;  
    console.log(this.flights);
  }

}
