import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'append',
    pure: false
})
export class AppendPipe implements PipeTransform {
    transform(value: any) {
        console.log("11111111111111111")
        return value + "wecome"
    }

}

@Pipe({
    name: 'filter',
    pure: true
})
export class FilerPipe implements PipeTransform {
    transform(value: any,field:any,filterValue:any) {
        if(value && value.length>0){
            return value.filter((x: { [x: string]: any; })=>x[field]==filterValue);
        }
        else{
            return [];
        }
        
    }

}