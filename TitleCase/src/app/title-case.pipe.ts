import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;

    let prepositions = ['of', 'the'];
    let input = value.split(' ');
    for (var i = 0; i < input.length; i++) {
      if (i != 0 && prepositions.includes(input[i].toLowerCase())) {
        input[i] = input[i].toLowerCase();
      } else {
        input[i] =
          input[i].substring(0, 1).toUpperCase() + input[i].substring(1);
      }
    }

    return input.join(' ');
  }
}
