import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  //parent to child start
  @Input()
  name!: string;
  //parent to child end
  @Output() sendData = new EventEmitter<any>();
  //child to parent start

  constructor() { }

  ngOnInit(): void {
  }

  childfunction() {
    const temp = [
      { name: "test", age: 1, },
      { name: "test1", age: 2, },
    ]
    this.sendData.emit(temp);
  }

}
