import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace' //TODO: <== nombre del Pipe!!
})
export class ReplaceSpacePipe implements PipeTransform {

  //TODO: Nickname: (Hola soy pepe) ==> hola-soy-pepe
  transform(value: string, args: string): string {
    console.log({value});
    value = value.split(' ').join(args).toLocaleLowerCase();
    return value; //TODO <=== 
  }

}
