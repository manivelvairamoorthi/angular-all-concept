export class CusObservable {

    subscribers = [];
    constructor(subscriber:any) {
        subscriber(this)

    }

    subscribe(method: any) { 
        console.log("checkkkkkkkkkk");
    }

    next(value:any){
        console.log("valueeeeeeeee",value)
        this.subscribers.forEach(data=>{
            (data)
            console.log(data)
        })
    }

    error(){
        console.log("error")

    }

    complete(){
    console.log("complete")
    }
    
}