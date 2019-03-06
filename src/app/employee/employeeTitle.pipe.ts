import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
    name: 'addTitle'
})
export class employeeTitle implements PipeTransform {
    transform(name: string, gender: string): string {
        if (gender.toLowerCase() === 'male') {
            return 'Mr.' + name;
        }
        else {
            return 'Miss.' + name
        }

    }

}