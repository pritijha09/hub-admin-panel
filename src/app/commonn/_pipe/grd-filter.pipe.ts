import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grdFilter',
  pure: true
})
export class GrdFilterPipe implements PipeTransform {
  transform(value:any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();
    return value.filter((item) => {
        return JSON.stringify(item)
        .toLowerCase()
        .includes(args);
    })
  }
}