import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/default/spinner/spinner.service';
import { AcaoInserirModalComponent } from 'src/app/modal/acao-inserir-modal/acao-inserir-modal.component';
import { Acao } from 'src/app/model/acao.model';
import { UsuarioService } from 'src/app/validacao/service/usuario.service';
import { AcaoService } from './acao.service';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

  _colunasList: string[] = [];
  _atributosList: string[] = [];
  _acaoList: Acao[] = [];
  _colunasEditar: string[] = [];
  _atributosEditar: string[] = [];

  _usuario: string = "";

  usuarioSubscription: Subscription = new Subscription;
  acaoSubscription: Subscription = new Subscription;
  subscription: Subscription = new Subscription;

  constructor(
    private _acaoService: AcaoService,
    private _usuarioService: UsuarioService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    this.acaoSubscription = this._acaoService.get().subscribe(data => {
      if(data){
        setTimeout(() =>{
          this.consultarCliente(this._usuario);
        },1000);
      }
    });

    this.usuarioSubscription = this._usuarioService.get().subscribe(data => {
      this._usuario = data.nomeUsuario;
      this.consultarCliente(data.nomeUsuario);  
    });
  }

  consultarCliente(usuario: string){
    let subscription = this._acaoService.consultarListAcoes(usuario).subscribe(data => {
      subscription.unsubscribe();
      this._acaoList = data;
      //this._spinnerService.setStatusSpinner(false);
      this.montarDadosTabela();
    });
  }

  montarDadosTabela(){
    this._colunasList = ['Nome', 'Habilitado'];
    this._atributosList = ['nomeAcao', 'ativoAcao'];
  }

  falhaPermissao() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = '0 auto';
    dialogConfig.width = "30%";
    dialogConfig.data = {
      ativosList: this._acaoList,
      usuario: this._usuario
    }

    this.dialog.open(AcaoInserirModalComponent, dialogConfig); 
  }

}
