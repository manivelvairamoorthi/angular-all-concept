import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { from, fromEvent, interval, of, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: RepositoryService, 
    private router:Router) { }
  isSub: boolean = false;
  count=0;
  ngOnInit(): void {

    const temp = [{ name: "test" }, { name: "test2" }];

    const lement = temp.filter(data => data.name == "test");

    console.log("lement", lement)
    console.log("temp", temp)

    // const data = from([1, 2, 3, 4, 5]);
    // data.subscribe({
    //   next(response) {
    //     console.log(response)
    //   }
    // });

    // const data1 = interval(1000)
    //   .pipe(take(10))
    // data1.subscribe({
    //   next(response) {
    //     console.log(response)
    //   }
    // });

    // const data2 = of(1,2,3,4)

    // data2.subscribe({
    //   next(response) {
    //     console.log(response)
    //   }
    // });

    // const sub:Subject<any>=new Subject();


    //   sub.subscribe(x=>console.log("from app first",x));
    //   sub.next('gopi')
    //   sub.subscribe(x=>console.log("kishore",x));
    //   sub.next('kishore');

    // this.service.sub.subscribe(x=>console.log("welcom",x))
  }
  num!:number
  emit() {
   const temp=this.num++
    this.service.sendData(this.service.count++);
    this.service.sendBeh(this.service.count++);
    this.service.sendReplyData(this.service.count++);

    // if (!this.isSub) {
    //   this.isSub = true;
    //   this.service.behObs.subscribe(x => {
    //     console.log("hello beh subject", x)
    //   });
    // }

    this.count++
    if(this.count>3){
     this.service.replayObs.subscribe(x=>{
      console.log("hello replay subject",x)
    })
    }
  }

  edit(){
    this.router.navigate(["edit/2"]);
  }
}
