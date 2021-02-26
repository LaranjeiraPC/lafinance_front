import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model';
import { ConfigLaFinance } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private URL: string = ConfigLaFinance.api.base_url + "usuario";

  private static usuario = new Usuario();
  private static observable : BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>(UsuarioService.usuario);
  
  get():BehaviorSubject<Usuario>{
    return UsuarioService.observable;
  }
  
  setAutenticar(autenticado: boolean, nome: string, tipoAutenticacao: string){
    this.setClean();
    UsuarioService.usuario.autenticado = autenticado;
    UsuarioService.usuario.nomeUsuario = nome;
    UsuarioService.usuario.perfilUsuario = tipoAutenticacao;
    UsuarioService.observable.next(UsuarioService.usuario);  
  }

  setAlert(status: string, message: string) {
    UsuarioService.usuario.message = message;
    UsuarioService.usuario.status = status;
    UsuarioService.observable.next(UsuarioService.usuario);
  }
  
  setClean(){
    UsuarioService.usuario.message = "";
    UsuarioService.usuario.status = "";
    UsuarioService.observable.next(UsuarioService.usuario); 
  }
  
  autenticarUsuario(usuario: string, senha: string): Observable<any>{
    return this.http.get(this.URL+"/autenticar/" + usuario + "/" + senha);
  }

  public uploadImage(image: File, id: number): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post(this.URL + '/upload-image/' + id, formData);
  }

}
