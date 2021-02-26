import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from './default/spinner/spinner.service';
import { UsuarioService } from './validacao/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  usuarioSubscription: Subscription = new Subscription;

  _logado: boolean = false;
  _loadingSpinner = 'none';
  
  constructor(
    private _usuarioService: UsuarioService,
  ) {}

  ngOnInit(): void {
  
    this.usuarioSubscription = this._usuarioService.get().subscribe(data => {
      this._logado = data.autenticado;
      this.carregarPlanoDeFundo();      
    });
  }

  carregarPlanoDeFundo(){
    if(!this._logado){
      document.body.style.backgroundImage = 'url("./assets/pictures/back_castel.png")';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = '100%';
     }else{
       document.body.style.background = 'rgba(0, 0, 0, 0)';
     }
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe();
  }

}