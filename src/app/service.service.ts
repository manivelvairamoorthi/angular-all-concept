import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public count=5;

  constructor() { }

  public getdata(){
    let text="";
    return text;
  }

  public token(){
    let text="welcome";
    return text;
  }

}
