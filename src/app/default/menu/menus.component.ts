import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/validacao/service/usuario.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  public _permissao: boolean = false;
  subscription: Subscription = new Subscription;
  
  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.subscription = this._usuarioService.get().subscribe(data => {
      if(data.perfilUsuario == "Admin"){
        this._permissao = true;
      }else{
        this._permissao = false;
      }
    });
  }
 
  logout(){
    this._usuarioService.setAutenticar(false, "", "");
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
