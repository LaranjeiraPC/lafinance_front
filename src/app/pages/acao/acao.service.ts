import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Acao } from 'src/app/model/acao.model';
import { ConfigLaFinance } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {

  private static indicador: boolean = false
  private static observable : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(AcaoService.indicador);

  constructor(private http: HttpClient) { }

  private URL: string = ConfigLaFinance.api.base_url + "acao";

  get():BehaviorSubject<boolean>{
    return AcaoService.observable;
  }

  setAtualizarTela(indicador: boolean){
    AcaoService.indicador = indicador;
    AcaoService.observable.next(AcaoService.indicador);  
  }

  consultarListAcoes(usuario: string): Observable<Acao[]>{
    return this.http.get<Acao[]>(this.URL+"/exibir/"+usuario);
  }

  salvarAtivo(ativo: any): Observable<any>{

    const endpoint = ConfigLaFinance.api.base_url + "acao/salvar/";
    return this.http.post<any>(endpoint, ativo);
  }

}
