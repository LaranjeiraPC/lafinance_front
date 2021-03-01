import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SpinnerService } from 'src/app/default/spinner/spinner.service';
import { Acao } from 'src/app/model/acao.model';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-compra-inserir-modal',
  templateUrl: './compra-inserir-modal.component.html',
  styleUrls: ['./compra-inserir-modal.component.css']
})
export class CompraInserirModalComponent implements OnInit {

  private _usuario: Usuario
  private _acaoList: Acao[] = [];

  private _campoAtivo: string = "";
  private _campoQtd: string = "";
  private _campoVlrCompra: string = "";
  private _campoTotal: string = "";
  private _campoData: string = "";

  indAtivo: boolean = true;
  indQtd: boolean = true;
  indVlrCompra: boolean = true;
  indTotal: boolean = true;
  indData: boolean = true;

  indBotVoltar: boolean = false;
  indBotProximo: boolean = true;
  indBotSalvar: boolean = false;

  indReview: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CompraInserirModalComponent>,
    private spinnerService: SpinnerService,

    @Inject(MAT_DIALOG_DATA)  public data: any
  ) { }

  ngOnInit() {
    if(this.data) {
      this._usuario = this.data.usuario;
      this._acaoList = this.data.acao;
    }


  }

  closedDialog() {
    this.dialogRef.close();
  }

  verificarCampoAtivo(evento: string){
    if (evento.length > 0) {
      this._campoAtivo = evento.toLocaleUpperCase();
    }
  }

  verificarCampoQtd(evento: string){
    if (evento.length > 0) {
      this._campoQtd = evento.toLocaleUpperCase();
    }
  }

  verificarCampoVlrCompra(evento: string){
    if (evento.length > 0) {
      this._campoVlrCompra = evento.toLocaleUpperCase();
    }
  }

  verificarCampoTotal(evento: string){
    if (evento.length > 0) {
      this._campoTotal = evento.toLocaleUpperCase();
    }
  }

  verificarCampoData(evento: string){
    if (evento.length > 0) {
      this._campoData = evento.toLocaleUpperCase();
    }
  }

  proximo(){
    if(this.indReview){
      this.indBotSalvar = true;
      this.indBotProximo = false;
      this.indBotVoltar = true;
      
      this.indAtivo = true;
      this.indQtd = true;
      this.indVlrCompra = true;
      this.indTotal = true;
      this.indData = true;

    }else if(!this.indReview){
      this.indReview = true;

      this.indAtivo = false;
      this.indQtd = false;
      this.indVlrCompra = false;
      this.indTotal = false;
      this.indData = false;

      this.indBotSalvar = true;
      this.indBotProximo = false;
      this.indBotVoltar = true;
    }
  }

  voltar(){
    if(!this.indReview){
      this.indBotSalvar = true;
      this.indBotProximo = false;
      this.indBotVoltar = true;
    }else if(this.indReview){
      this.indReview = false;
      this.indBotSalvar = false;
      this.indBotProximo = true;
      this.indBotVoltar = false;

      this.indAtivo = true;
      this.indQtd = true;
      this.indVlrCompra = true;
      this.indTotal = true;
      this.indData = true;

    }
  }

  cadastrarCompra(){

  }

}
 