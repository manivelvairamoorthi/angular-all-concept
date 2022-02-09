import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { RepositoryService } from '../repository.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  providers: [RepositoryService],
})
export class SampleComponent implements OnInit {

  @ViewChild('loginForm', { static: false }) loginform: any;

  constructor(public repservice: RepositoryService,
    private router:Router
    ) { }
  parentName = "Welcome";
  public array: any = [{ name: "test", age: "12" }, { name: "test", age: "12" }, { name: "test", age: "12" }]
  highlitcolor!: string;

  test: any;
  istoggle: boolean = false;
  firstname:any;

  studentData: any = [
    { string: "test1", age: 12 },
    { string: "test1", age: 12 },
  ]
  ngOnInit(): void {
    // console.log("component initilize")


  }
  submit() {
    // console.log("333333333333")
    const test = { name: "ragu", age: "120" }
    this.array.push(test);
  }
  eventChnage() {
    this.repservice.count++
  }
  receivData(event: any) {
  
    this.studentData.push(event);
  }

  highlight(color: string) {
    this.highlitcolor = color;
  }

  toggle() {
    this.istoggle = !this.istoggle
  }
  testcolor: any;
  colorchange(color: any) {
    this.testcolor = color;
  }
  ngtest: boolean = false;
  clickfn() {
    this.ngtest = !this.ngtest;
  }
  // saveFunction() {
  //   if (this.loginform.valid) {
  //     console.log("true");
  //   }
  //   else {
  //     Object.keys(this.loginform.form.controls).forEach(key => {
  //       this.loginform.form.get(key).markAsDirty();
  //     })
  //   }

  //}

  saveFunction(){
    this.router.navigate(["temp"]);
  }
  cancelFunction(){
    this.router.navigateByUrl("/cancel")
  }
  canDeactivate(){
    return true;
  }

}
