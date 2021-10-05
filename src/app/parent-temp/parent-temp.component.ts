import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-temp',
  template: `
  <router-outlet></router-outlet>
    <p>
      
    </p>
    name:<input type="text"/><br/>
    password:<input type="text"/><br/>
    <button routerLink="parentTemp1">login</button>
   
  `,
  styleUrls: ['./parent-temp.component.scss']
})
export class ParentTempComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-parent-temp1',
  template: `
    <p>
     successfully logined dashboard page!
    </p>
    <button routerLink="">cancel</button>
  `,
  styleUrls: ['./parent-temp.component.scss']
})
export class ParentTempComponent1 implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


