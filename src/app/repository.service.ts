import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RepositoryService {
  
  //subject star
 sub!: Subject<any>;
  obs!: Observable<any>
  //subject end


  //subject beha start

  private behSub!: BehaviorSubject<number>;
  behObs!: Observable<number>;

  //subject beha end



  //replay subject start

  private replaySub!:ReplaySubject<number>
  replayObs!:Observable<number>

  //replay subject end

  count = 5
  constructor(private http: HttpClient) {
    //subject star
    this.sub = new Subject<any>();
    this.obs = this.sub.asObservable();
    //subject end


    //subject beh start

    this.behSub = new BehaviorSubject<number>(1000);
    this.behObs = this.behSub.asObservable();

    //subject beh end

    //replay subject

    this.replaySub=new ReplaySubject<number>(3)
    this.replayObs=this.replaySub.asObservable();

  }

  //subject start

  sendData(data: any) {
    this.sub.next(data)
  }
  //subject end

  //subject beh star

  sendBeh(data: any) {
    this.behSub.next(data);
  }

  //subject beh end

//replay subject

sendReplyData(data: any) {
  this.replaySub.next(data)
}

//replay subject

  userlist(): Observable<any> {

    return this.http.get(environment.apiEndPoint + 'bio/projectAll');
  }

  postData(requested: any): Observable<any> {

    return this.http.post(environment.apiEndPoint + 'bio/login', requested);
  }


}
