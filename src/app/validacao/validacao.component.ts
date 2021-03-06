import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario.model';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-validacao',
  templateUrl: './validacao.component.html',
  styleUrls: ['./validacao.component.css']
})
export class ValidacaoComponent implements OnInit {

  public _usuario: string = "";
  public _senha: string = "";
  private _user!: Usuario;
  public _log: string = "";

  constructor(
    private _usuarioService: UsuarioService,
    private _rota: Router,
  ) { }

  ngOnInit() {
  }

  verificarCampoUsuario(evento: string) {
    if (evento.length > 0) {
      this._usuario = evento;
    }
  }

  verificarCampoSenha(evento: string) {
    if (evento.length > 0) {
      this._senha = evento;
    }
  }

  autenticar() {
    if (this._usuario != null && this._senha != null) {
      
      let subscription = this._usuarioService.autenticarUsuario(this._usuario, this._senha).subscribe(data => {
        subscription.unsubscribe();
        this._user = data;
        if (this._user != null) {
          this._usuarioService.setAutenticar(true, this._user.nomeUsuario, this._user.perfilUsuario);
          this._log = "";
          this._rota.navigate(['/dashboard']);
        } else {
          this._usuarioService.setAutenticar(false, "", "");
          this._log = "Usuário inválido";
        }
      }, error => {
        this._usuarioService.setAutenticar(false, "", "", );
        this._log = "Usuário inválido";
      });
    }
  }


}
