import { Component, Input, OnInit, Output, EventEmitter,OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
// import { ServiceService } from '../../service.service';
import { RepositoryService } from '../../repository.service';
import { SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  providers: []
})
export class TopNavComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,
AfterViewChecked,AfterContentInit,AfterContentChecked {
  @Input() name!: any[];
  @Output() sendtodata = new EventEmitter<any>();

  constructor(public repservice: RepositoryService) { }
  
  
 
 @Input() title!:any;
  value: any;
  timeinstance:any
 
  
  ngOnInit(): void {
    this.value = this.name;
   console.log("component inilize")
  //  this.timeinstance=setInterval(()=>{
  //    console.log(new Date())
  //  },1000)

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("changesss")
  }
  ngDoCheck(): void {
    console.log("checked")
   }
  ngOnDestroy(){
    console.log("enter")
    if(this.timeinstance){
      clearInterval(this.timeinstance);

    }
   
  }
  ngAfterViewInit(): void {
    console.log("afterViewinit")
  }
  ngAfterViewChecked(): void {
   console.log("afterviewcheckeddddd")
  }
  ngAfterContentInit(): void {
   console.log("contentinit")
  }
 
  ngAfterContentChecked(): void {
    console.log("content checked")
  }
  senttoparent() {
    console.log("emittttttt");
   
    const temp={
      string:"gurur",age:12
    };
    this.sendtodata.emit(temp);
  }



}
