import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit,AfterContentInit {

  constructor() { }
  ngAfterContentInit(): void {
    console.log("child AfterViewInit")
  }

  ngOnInit(): void {
    // console.log("component initilize")
  }

}
