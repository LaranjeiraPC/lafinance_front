import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acao } from 'src/app/model/acao.model';
import { ConfigLaFinance } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {

  constructor(private http: HttpClient) { }

  private URL: string = ConfigLaFinance.api.base_url + "acao";

  consultarListAcoes(usuario: string): Observable<Acao[]>{
    return this.http.get<Acao[]>(this.URL+"/exibir/"+usuario);
  }

  salvarAtivo(ativo: any): Observable<any>{
    const endpoint = ConfigLaFinance.api.base_url + "acao/salvar/";
    return this.http.post<any>(endpoint, ativo);
  }

  deletarAtivo(registro: any, url: string): Observable<any>{
    const endpoint = ConfigLaFinance.api.base_url + url + "/delete/";
    return this.http.post<any>(endpoint, registro);
  }

}
