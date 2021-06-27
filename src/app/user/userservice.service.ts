import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  public username:string ;
  
  public getUsername():string{
    return this.username;
  }
  public setUsername(val: string){
    this.username = val;
  }


  public email:string ;

  public getEmail():string{
    return this.email;
  }
  public setEmail(val: string){
    this.email = val;
  }



  public age:string ;
  
  public getAge():string{
    return this.age;
  }
  public setAge(val: string){
    this.age = val;
  }


  public mob:string ;

  public getMob():string{
    return this.mob;
  }
  public setMob(val: string){
    this.mob = val;
  }
}
