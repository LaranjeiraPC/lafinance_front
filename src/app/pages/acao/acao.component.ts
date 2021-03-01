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
  spinnerSubscription: Subscription = new Subscription;
  subscription: Subscription = new Subscription;

  constructor(
    private _acaoService: AcaoService,
    private _spinnerService: SpinnerService,
    private _usuarioService: UsuarioService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this._spinnerService.setAlert("CARREGANDO", null, false);
    this.spinnerSubscription = this._spinnerService.get().subscribe(data => {
      if(data.refresh){
        setTimeout(() =>{
          this.consultarCliente(this._usuario);
        },200);
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
      this.montarDadosTabela();
    });
  }

  montarDadosTabela(){
    this._colunasList = ['Nome', 'Habilitado', 'Editar', 'Excluir'];
    this._atributosList = ['nomeAcao', 'ativoAcao'];
    this._colunasEditar = ['Nome', 'Habilitado'];
    this._atributosEditar = ['nomeAcao', 'ativoAcao'];
  }

  inserirAtivo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = '0 auto';
    dialogConfig.width = "25%";
    dialogConfig.data = {
      ativosList: this._acaoList,
      usuario: this._usuario
    }

    this.dialog.open(AcaoInserirModalComponent, dialogConfig); 
  }

}
