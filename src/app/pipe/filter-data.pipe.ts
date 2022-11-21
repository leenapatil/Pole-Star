import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(items: any[], field: string, value): unknown {
    console.log('Value =>', value);
    console.log('field =>', field);

    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }
    let arr = [];
    if (Array.isArray(value)) {
      if (value[0]) {
        arr.push('critical');
      }
      if (value[1]) {
        arr.push('warning');
      }
      if (value[2]) {
        arr.push('ok');
      }
    }
    if (!arr.length) {
      return items;
    }
    return items.filter((singleItem) => {
      return (arr.indexOf(singleItem[field].toLowerCase()) > -1);
    });

  }
}
