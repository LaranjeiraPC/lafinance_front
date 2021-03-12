import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Subscription } from 'rxjs';
import { CompraInserirModalComponent } from 'src/app/modal/compra-inserir-modal/compra-inserir-modal.component';
import { CompraService } from 'src/app/modal/compra-inserir-modal/service/compra.service';
import { Compra } from 'src/app/model/compra.model';
import { Investimento } from 'src/app/model/investimento.model';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/validacao/service/usuario.service';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit, OnDestroy {

  private _usuarioSubscription: Subscription = new Subscription;
  private _usuario: Usuario;
  private _compraList: Investimento[] = [];
  private _vendaList: Investimento[] = []; 
  private _investimento: Investimento[] = [];

  constructor(
    public dialog: MatDialog,
    private _usuarioService: UsuarioService,
    private _compraService: CompraService,
  ) { }

  ngOnInit() {
    this._usuarioSubscription = this._usuarioService.get().subscribe(data => {
      this._usuario = data;
      this.carregarCompras(this._usuario);
    });
  }

  carregarCompras(usuario: Usuario) {
    let subscription = this._compraService.consultarListCompras(usuario.nomeUsuario).subscribe(data => {
      subscription.unsubscribe();
      this._compraList = data;
    });
  }

  inserirCompra() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = '0 auto';
    dialogConfig.width = "30%";
    dialogConfig.data = {
      usuario: this._usuario
    }

    this.dialog.open(CompraInserirModalComponent, dialogConfig);
  }

  ngOnDestroy(): void {
    this._usuarioSubscription.unsubscribe();
  }


}
