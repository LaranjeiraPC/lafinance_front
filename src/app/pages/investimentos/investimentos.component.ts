import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Subscription } from 'rxjs';
import { CompraInserirModalComponent } from 'src/app/modal/compra-inserir-modal/compra-inserir-modal.component';
import { Acao } from 'src/app/model/acao.model';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/validacao/service/usuario.service';
import { AcaoService } from '../acao/acao.service';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {

  private _usuarioSubscription: Subscription = new Subscription;
  private _usuario: Usuario;
  private _acaoList: Acao[] = [];

  constructor(
    public dialog: MatDialog,
    private _usuarioService: UsuarioService,
    private _acaoService: AcaoService,
  ) { }

  ngOnInit() {
    this._usuarioSubscription = this._usuarioService.get().subscribe(data => {
      this._usuario = data;
    });
  }
  
  carregarAtivos(){
    let subscription = this._acaoService.consultarListAcoes(this._usuario.nomeUsuario).subscribe(data => {
      subscription.unsubscribe();
      this._acaoList = data;
    });
  }
 
  inserirCompra() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = '0 auto';
    dialogConfig.width = "30%";
    dialogConfig.data = {
      usuario: this._usuario,
      acao: this._acaoList
    }

    this.dialog.open(CompraInserirModalComponent, dialogConfig); 
  }

}
