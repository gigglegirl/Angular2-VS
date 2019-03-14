import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
    name: 'addTitle'
})
export class employeeTitle implements PipeTransform {
    @memo()
    transform(name: string, gender: string): string {
        console.log("pipe called");
        if (gender.toLowerCase() === 'male') {
            return 'Mr.' + name;
        }
        else {
            return 'Miss.' + name
        }

    }

}