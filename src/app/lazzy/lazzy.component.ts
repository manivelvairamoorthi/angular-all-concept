import { Component, OnInit, ViewChild } from '@angular/core';
import { combineLatest, concat, forkJoin, from, interval, merge, of, race, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-lazzy',
  templateUrl: './lazzy.component.html',
  styleUrls: ['./lazzy.component.scss']
})
export class LazzyComponent implements OnInit {
  
  constructor() { }
userform!:FormGroup;

  ngOnInit(): void {

    this.userform=new FormGroup({
      'name':new FormControl(null),
      'password':new FormControl('password')
    });

    //combine lates

    // const firstTime = interval(1000)
    //   .pipe(map(x => x + 10))

    // const secondTime = interval(3000)
    //   .pipe(map(x => x + 1000))

    // const combinedTimer = combineLatest(firstTime, secondTime)

    // combinedTimer.subscribe(value => console.log(value))

    //concat
    // const firstTime = interval(1000)
    //   .pipe(take(10), map(x => x + 10))
    // const secondTime = interval(3000)
    //   .pipe(take(5), map(x => x + 1000))
    // const combinedTimer = concat(firstTime, secondTime)
    // combinedTimer.subscribe(value => console.log(value))

    //forkjoin
    // const firstTime = interval(1000)
    //   .pipe(take(10), map(x => x + 10))
    // const secondTime = interval(3000)
    //   .pipe(take(5), map(x => x + 1000))
    // const combinedTimer = forkJoin(firstTime, secondTime)
    // combinedTimer.subscribe(value => console.log(value))

    //merge
    // const firstTime = interval(1000)
    //   .pipe(take(10), map(x => x + 10))
    // const secondTime = interval(3000)
    //   .pipe(take(5), map(x => x + 1000))
    // const combinedTimer = merge(firstTime, secondTime)
    // combinedTimer.subscribe(value => console.log(value))

    //race
    // const firstTime = interval(3000)
    //   .pipe(take(10), map(x => x + 10))

    // const secondTime = interval(1000)
    //   .pipe(take(5), map(x => x + 1000))
    // const combinedTimer = race(firstTime, secondTime)
    // combinedTimer.subscribe(value => console.log(value))

    //zip
    let age = of<number>(12, 13, 14)

    let name = of<string>("test", "test2", "test3")
    
    let status = of<boolean>(true, true, false)

    zip(age, name, status)
      .pipe(map(([age, name, status]) => ({
        age, name, status
      }))).subscribe(x => console.log(x))

  }

  //distinctUntil Change

submit(){
  console.log(this.userform.value)
}
}
