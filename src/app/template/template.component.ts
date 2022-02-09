import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subscriber, interval, from } from 'rxjs';
import { RepositoryService } from '../repository.service';
import { HttpClient } from "@angular/common/http";
import { map, take } from "rxjs/operators"
import { promise } from 'selenium-webdriver';



@Component({
  selector: 'app-template',
  template: `

  child content

  <ng-content></ng-content>

  <br/><br/>
<div>


  <br/><br/><br/>
<div>{{appentext | appenTest }}
  <br/><br/>
<div>Slice:{{sampleTest | slice:1:4}}
  <div>{{sampleArr}}</div>
   <table>
   <tr *ngFor='let data of array'>
   <td>
   {{data.created_date | date:'dd/MM/yy'}}
   <td>
   <td>
   {{data.project_name | lowercase}}
   <td>
   </tr>
   </table>
   <button (click)=submit()>save</button>
   <div>
  {{slice | number:'0.0-0'}}
   </div>
   <div>
  {{temp | slice:0:4}}
   </div>
   <div>
   {{'test'|append}}
   </div>
   <input type='text' [(ngModel)]="value">
   <div *ngFor="let data of testArr | filter:'gender':'f' ">
   {{data.name }}
   </div>
   <div>
  

   <div>date{{date | async}}</div>
   
  `,
  //  jsonData:{{jsonData | async |json}}</div>
  // asynData:{{asyncData | async | json}}
  // {{dataValue | async}}
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit, AfterViewInit, AfterViewChecked,AfterContentInit,AfterContentChecked
// AfterViewChecked,AfterContentInit,AfterContentChecked
{

  constructor(private service: RepositoryService, private http: HttpClient) { }

  ngAfterContentChecked(): void {
   console.log("child AfterContentChecked");
  }

  ngAfterContentInit(): void {
   console.log("child AfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("child AfterviewChecked");
  }

  ngAfterViewInit(): void {
    console.log("child ngAfterViewinit")
  }
  appentext = "welcome"
  array: any = [];
  slice = 12233232
  temp = [1, 2, 3, 4];
  sampleTest = [1, 2, 3, 4, 5]
  testArr = [
    { name: "test", gender: 'm' }, { name: "test1", gender: 'f' }, { name: "test3", gender: 'm' }

  ];

  sampleArr = [
    { name: "test", gender: 'm' }, { name: "test1", gender: 'f' }, { name: "test3", gender: 'm' }

  ];
  value: any
  //asyn pipe start
  //  asyncData=new Observable(Subscriber=>{
  //   this.http.get('http://localhost:3000/bio/projectAll').subscribe(x=>Subscriber.next(x))
  //  });

  dataValue = interval(3000).pipe(map(x => new Date()), take(10))

  //asyn pipe end


  // jsonData = this.http.get('http://localhost:3000/bio/projectAll');
  // jsonData =new Promise((resolve,rejects)=>{
  //   this.http.get('http://localhost:3000/bio/projectAll').subscribe(x=>resolve(x))
  // } );
  // jsonData =new Observable(Subscriber=>{
  //   this.http.get('http://localhost:3000/bio/projectAll').subscribe(x=>Subscriber.next(x))
  // } );

  date = interval(1000).pipe(map(x => new Date()), take(10))
  ngOnInit(): void {


    // this.service.userlist().subscribe(data => {
    //   this.array = data;
    // });



    const obs1 = new Observable(Subscriber => {
      console.log("welcome obs1");
      Subscriber.next(1);
      Subscriber.next("second");

      Subscriber.complete();
      Subscriber.error("error occured");

      Subscriber.next("three");
      Subscriber.next("five");
    });


    obs1.subscribe(x => {
      console.log(x);
    }, complete => {
      console.log("failed", complete)
    });


    // obs1.subscribe(x=>{
    //   console.log("2222222222222")
    //   console.log(x);
    // })



  }

  submit() {
    this.testArr.push({ name: 'guru', gender: 'f' })
    const temp = {
      user_name: "moorthyt@gmail.com",
      // password:"test12"
    }


    this.service.postData(temp).subscribe(data => {
      console.log(data)
      if (data.code != 200) {
        console.log("error")
      }
      else {
        const test = data
      }
    }, error => {
      console.log(error.message)
    });
  }


}













@Component({
  selector: 'app-template1',
  template: `
    <p>
      Cancel works!
    </p>
    
   
  `
  ,
  styleUrls: ['./template.component.scss']
})
export class Template1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
