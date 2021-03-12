import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from 'src/app/model/compra.model';
import { Investimento } from 'src/app/model/investimento.model';
import { ConfigLaFinance } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  private URL: string = ConfigLaFinance.api.base_url + "investimento";

  salvarCompra(ativo: any): Observable<any>{
    const endpoint = ConfigLaFinance.api.base_url + "investimento/salvar/";
    return this.http.post<any>(endpoint, ativo);
  }

  consultarListCompras(usuario: string): Observable<Investimento[]>{
    return this.http.get<Investimento[]>(this.URL+"/exibir/"+usuario);
  }

}
 