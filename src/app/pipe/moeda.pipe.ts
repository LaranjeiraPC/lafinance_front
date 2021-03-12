import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {

  transform(value: string): any {

    if (value != undefined) {

      var campoVlrCompra = value.replace(",", "");

      value = value.replace("0,00", "");
      value = value.replace("0,0", "");
      value = value.replace("0,", "");

      value = value.replace("0.00", "");
      value = value.replace("0.0", "");
      value = value.replace("0.", "");
      value = value.replace(",", "");
      value = value.replace(".", "");

      if (value.length == 1) {
        value = "0,0" + value;
      } else if (value.length <= 2) {
        if(value == ""){
          value = "0,00"
        }else{
          value = "0," + value.slice(-2);
        }
       
      } else{

        campoVlrCompra = value.substring(0, value.length - 2);

        campoVlrCompra = campoVlrCompra + "." + value.slice(-2);
    
        var converter = +campoVlrCompra;

        value = converter.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2    
        });
      }
      

    }

    return value;
  }

}
