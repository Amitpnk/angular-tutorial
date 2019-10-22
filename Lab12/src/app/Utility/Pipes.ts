import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({ name: 'reverseit' })
export class ReverseString {

    transform(value: string): string {
        return value.split('').reverse().join('');
    }
}