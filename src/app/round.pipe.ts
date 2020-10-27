import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'roundNum' }) //làm tròn số

export class RoundPipe implements PipeTransform {
    transform(value: number,isUpper: boolean,addTo: number): number {
    // chuyển thành kiểu số, value: number : input, number: output
        if (isUpper){
            return Math.ceil(value + addTo);
        }  
        return Math.floor(value + addTo);
    }
}

