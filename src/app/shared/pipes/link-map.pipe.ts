import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkMap'
})
export class LinkMapPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('http://', '//');
  }

}
