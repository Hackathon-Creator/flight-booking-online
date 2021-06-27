import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './model/user';
import {UserserviceService} from "./../user/userservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  dynamicForm: FormGroup;
  submitted = false;
  user = new User();
  errormsg:string;

  constructor(private router: Router, private formBuilder: FormBuilder,public userserviceService:UserserviceService) { }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    });
  }
  login() {
    this.user = this.dynamicForm.value;
    if (this.user.username === 'admin' && this.user.password === '1234') {
      this.userserviceService.setUsername(this.user.username);
      this.userserviceService.setAge("45");
      this.userserviceService.setMob("+91-123456789");
      this.userserviceService.setEmail("admin@gmail.com");

      this.router.navigate(['welcome-admin']);
    } else if (this.user.username == 'user' && this.user.password == '1234') {
      this.userserviceService.setUsername(this.user.username);
      this.userserviceService.setAge("40");
      this.userserviceService.setMob("+91-3323456789");
      this.userserviceService.setEmail("user@gmail.com");
      this.router.navigate(['user']);
    }else{
         
       this.errormsg="401 - Unauthorized. Your unauthorized is failed.";

    }
  }

  sign(){
    this.router.navigate(['signup']);  }
}
