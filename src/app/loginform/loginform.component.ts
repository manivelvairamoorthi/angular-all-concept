import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, observable, Subscriber } from 'rxjs';
import { CusObservable } from '../cusObservable';
import { RepositoryService } from '../repository.service';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  @ViewChild("loginForm", { static: false }) loginform: any;

  constructor(private service: RepositoryService,private route: ActivatedRoute,
    private router:Router) {

  }
  temp: any = { name: "", password: "" }
  test2: any;
  ngOnInit(): void {

   console.log("routeeeeeeeeeee",this.route.snapshot.url[1].path);

    const test = new Observable(Subscriber => {
      console.log("2222222222222")
      Subscriber.next("11111111111");
      Subscriber.next("11111111111223");
      setTimeout(() => Subscriber.next("11111111111000"), 400)
    });
    console.log("start")
    test.subscribe(x => {
      console.log(x)
    });
    console.log("end")
    //function start
    const test1 = () => {
      console.log("1000")
    }
    var y = test1();
    console.log(y)
    //function end

    //sub,error,complete start
    this.test2 = new Observable(Subscriber => {

      Subscriber.next("11111111111");
      Subscriber.error("error occured")
      Subscriber.complete();
      Subscriber.next("11111111111223");
    });
    this.test2.subscribe((data: any) => {
      console.log(data)
    }, (_complete: any) => {
      console.log("completeeeeeeee")
    });

    this.test2.subscribe((data: any) => {
      console.log(data)
    }, (error: any) => {
      console.log("errorrrrr", error);

    });
    setInterval(() => {
      this.apifunction();
    }, 1000)


    //end
  }

  studentData: any = [];

  spitest: any;
  apifunction() {
    this.spitest = this.service.userlist().subscribe(data => {
      console.log("sucessss", data);
    });
    this.spitest.unsubscribe();
  }
  submitFunction() {
    

    const check = new CusObservable((sub: any) => {
      console.log("checkkkkkkkkkk")
      sub.next("checkkkk")
    });

    check.subscribe((x: any) => {
      console.log("xxxxxxxxxxxx", x)
    })

    console.log(this.loginform)
    if (this.loginform.valid) {
      this.studentData.push(Object.assign({}, this.temp));
      console.log(this.studentData);

    }
    else {
      Object.keys(this.loginform.form.controls).forEach(key => {
        this.loginform.form.get(key).markAsDirty();
      });

    }

  }


}
