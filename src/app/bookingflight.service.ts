import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingflightService {

  constructor() { }

  public fromcity:string ;
  
  public getFromcity():string{
    return this.fromcity;
  }
  public setFromcity(val: string){
    this.fromcity = val;
  }


  public tocity:string ;

  public getTocity():string{
    return this.tocity;
  }
  public setTocity(val: string){
    this.tocity = val;
  }



  public fromdate:string ;
  
  public getFromDate():string{
    return this.fromdate;
  }
  public setFromDate(val: string){
    this.fromdate = val;
  }


  public todate:string ;

  public getToDate():string{
    return this.todate;
  }
  public setToDate(val: string){
    this.todate = val;
  }
}
