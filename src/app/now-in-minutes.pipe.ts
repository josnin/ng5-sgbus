import { Pipe, PipeTransform } from  '@angular/core';
/*
 *  minutes from (date) - now
 * Usage:
 * value | NowInMinutes
 * Example:
 * {{ 2018-04-15T16:41:27+08:00 | NowInMinutes }}
 * formats to 3
*/

@Pipe({name: 'NowInMinutes'})
export class NowInMinutesPipe implements PipeTransform {

    private date1: Date;
    private date2: Date = new Date();

    transform(value: any): any {
        this.date1 = new Date(value);
        return this.date1.getMinutes()- this.date2.getMinutes();
    }
}

