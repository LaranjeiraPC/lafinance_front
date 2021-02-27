import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AcaoExcluirModalComponent } from 'src/app/modal/acao-excluir-modal/acao-excluir-modal.component';
import { AcaoInserirModalComponent } from 'src/app/modal/acao-inserir-modal/acao-inserir-modal.component';
import { UsuarioService } from 'src/app/validacao/service/usuario.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() url: string = "";
  @Input() data: any[] = [];
  @Input() colunas: any[] = [];
  @Input() atributos: any[] = [];

  @Input() colunasEditar: any[] = [];
  @Input() atributosEditar: any[] = [];
  @Input() indicadorExcluir: boolean = false;
 
  _permissao: boolean = false;

  subscription: Subscription = new Subscription;
  
  constructor(
    private rota: Router,
    private _usuarioService: UsuarioService,
    public dialog: MatDialog,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.subscription = this._usuarioService.get().subscribe(data => {
      if(data.perfilUsuario != "Leitura"){
        this._permissao = true;
      }else{
        this._permissao = false;
      }
    });
  }

  ngOnInit(): void {
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

  excluirRegistro(evento: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = '0 auto';
    dialogConfig.width = "30%";
    dialogConfig.data = {
      id: evento,
      url: this.url
    }

    this.dialog.open(AcaoExcluirModalComponent, dialogConfig); 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
