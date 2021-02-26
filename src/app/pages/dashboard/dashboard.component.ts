import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/validacao/service/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  usuarioSubscription: Subscription = new Subscription;

  _usuario: string = "";
  
  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioSubscription = this._usuarioService.get().subscribe(data => { 
      this._usuario = data.nomeUsuario.toUpperCase();
     });
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe();
  }

}
