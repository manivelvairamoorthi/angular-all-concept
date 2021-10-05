import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.scss']
})
export class LifeCycleHookComponent implements OnInit, OnDestroy, OnChanges,DoCheck {

  constructor() { }

  

@Input() title!:any
  timeinstance: any

  ngOnInit(): void {
    console.log("ngOnot successs");

    // this.timeinstance = setInterval(() => {
    //   console.log(new Date())
    // }, 1000)

  }
  ngOnDestroy(): void {
    console.log("ngOnDestory success");
    clearInterval(this.timeinstance)

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchanges Success");
  }

  ngDoCheck(): void {
  console.log("ngDoCheck success");
  }

}
