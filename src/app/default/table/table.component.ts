import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/validacao/service/usuario.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() url: string = "";
  @Input() data: any[] = [];
  @Input() colunas: any[] = [];
  @Input() atributos: any[] = [];

  @Input() colunasEditar: any[] = [];
  @Input() atributosEditar: any[] = [];

  _permissao: boolean = false;

  subscription: Subscription = new Subscription;
  
  constructor(
    private rota: Router,
    private _usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.subscription = this._usuarioService.get().subscribe(data => {
      if(data.perfilUsuario != "Leitura"){
        this._permissao = true;
      }else{
        this._permissao = false;
      }
    });
  }

  editarRegistro(registro: any) {
    this.rota.navigate(['/editar'],
      {
        queryParams: {
          url: this.url,
          id: registro.id,
          colunas: this.colunasEditar,
          atributos: this.atributosEditar
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
