import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private route:Router) {
    console.log(this.route)
   }
  

  parentname="welcome Parent";

  ngOnInit(): void {
  }
  array:any=[];
  receiveData(event:any){
    console.log(event);
    this.array=event;
  }
 

}
