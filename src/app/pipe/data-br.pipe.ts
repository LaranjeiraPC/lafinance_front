import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBR'
})
export class DataBRPipe implements PipeTransform {

  transform(value: string): any {

    let dataFormatada: string = "";

    if(value != undefined){
      if(value.length < 2){
        dataFormatada = value;
      }else if(value.length == 2){
        dataFormatada = value + "/";
      }else if(value.length > 3 && value.length <= 5){
        if(value.length == 5){
          dataFormatada = value + "/";
        }else{
          dataFormatada = value;
        }
      }else if(value.length > 6 && value.length < 11){
        dataFormatada = value;
      }
    }

    return dataFormatada;
  }

}
