import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from './repository.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:any = '';
  fromsub = "";
  show:boolean=false;
  constructor(private service: RepositoryService) {


    // this.service.sub.subscribe(x => {
    //   this.fromsub = x;
    //   console.log("subject response", x)
    // });

    //asobservable
    // this.service.obs.subscribe(x => {
    //    console.log("welcome    welcome", x);
    //   this.fromsub = x;
    // });


    //subject beh start
    // this.service.behSub.subscribe(x => {
    //   console.log("beh---subject", x)
    // })


    // this.service.behObs.subscribe(x => {
    //   console.log("beh---subject", x)
    // })
    //subject beh end

    //subject beh start
    //  this.service.replayObs.subscribe(x=>{
    //    console.log("replay------subject",x)
    // })
    //subject beh end


  }

  toogle(){
    this.show=!this.show
  }


}
