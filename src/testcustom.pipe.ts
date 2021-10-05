import { Pipe ,PipeTransform} from "@angular/core";

@Pipe({
    name:'appenTest',
    pure:false
})

export class AppendTest implements PipeTransform{
    transform(value: any) {
       
        return value +"AppentTest"
       
    }

}