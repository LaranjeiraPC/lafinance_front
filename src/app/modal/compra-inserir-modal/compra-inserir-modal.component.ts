import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SpinnerService } from 'src/app/default/spinner/spinner.service';
import { Acao } from 'src/app/model/acao.model';
import { Usuario } from 'src/app/model/usuario.model';
import { AcaoService } from 'src/app/pages/acao/acao.service';
import { MoedaPipe } from 'src/app/pipe/moeda.pipe';
import { CompraService } from './service/compra.service';

@Component({
  selector: 'app-compra-inserir-modal',
  templateUrl: './compra-inserir-modal.component.html',
  styleUrls: ['./compra-inserir-modal.component.css']
})
export class CompraInserirModalComponent implements OnInit {

  private _usuario: Usuario
  private _acaoList: Acao[] = [];

  private _campoAtivo: string = "";
  private _campoQtd;
  private _campoVlrCompra: string = "0,00";
  private _campoTotal: string = "0,00";
  private _campoData: string = "";

  private indAtivo: boolean = true;
  private indQtd: boolean = true;
  private indVlrCompra: boolean = true;
  private indTotal: boolean = true;
  private indData: boolean = true;

  private indBotVoltar: boolean = false;
  private indBotProximo: boolean = true;
  private indBotSalvar: boolean = false;

  private indReview: boolean = false;

  private dia: string = "";
  private mes: string = "";
  private ano: string = "";

  private compraList: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<CompraInserirModalComponent>,
    private _spinnerService: SpinnerService,
    private _acaoService: AcaoService,
    private _moedaPipe: MoedaPipe,
    private _compraService: CompraService,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if (this.data) {
      this._usuario = this.data.usuario;
    }
    this.carregarAtivos();
  }

  carregarAtivos() {
    let subscription = this._acaoService.consultarListAcoes(this._usuario.nomeUsuario).subscribe(data => {
      subscription.unsubscribe();
      this._acaoList = data;
      if (this._acaoList.length > 0) {
        this.carregarData();
      }
    });
  }

  carregarData() {
    var dataAtual = new Date;
    console.log(dataAtual);

    this.dia = dataAtual.getDay().toString();
    this.mes = (dataAtual.getMonth() + 1).toString();
    this.ano = dataAtual.getFullYear().toString();

    if (this.dia.length < 2) {
      this.dia = "0" + this.dia;
    }

    if (this.mes.length < 2) {
      this.mes = "0" + this.mes;
    }

    this._campoData = this.dia + "/" + this.mes + "/" + this.ano;
  }

  verificarCampoAtivo(evento: string) {
    if (evento.length > 0) {
      this._campoAtivo = evento.toLocaleUpperCase();
    }
  }

  verificarCampoQtd(evento: number) {
    if (evento > 0) {
      this._campoQtd = evento;
    }
  }

  verificarCampoVlrCompra(evento: string) {
    if (evento.length > 0) {
      this._campoVlrCompra = evento;

      this._campoVlrCompra = this._moedaPipe.transform(this._campoVlrCompra);

      var campoVlrCompra = this._campoVlrCompra.replace(",", ".");
      var campoFormatado: number = +campoVlrCompra;

      if(this._campoQtd == undefined){
        this._campoQtd = 0;
      }

      var campoCalculado = campoFormatado * this._campoQtd;
      if(!campoCalculado.toString().includes(".")){
        var decimalCampo: string = campoCalculado + ".00";

        return this._campoTotal = decimalCampo.toString();
      }

      this._campoTotal = campoCalculado.toString();
    }
  }

  verificarCampoTotal(evento: string) {
    if (evento.length > 0) {
      this._campoTotal = evento;
    }
  }

  verificarCampoData(evento: string) {
    if (evento.length > 0) {
      this._campoData = evento;
    }
  }

  proximo() {
    if (this.indReview) {
      this.indBotSalvar = true;
      this.indBotProximo = false;
      this.indBotVoltar = true;

      this.indAtivo = true;
      this.indQtd = true;
      this.indVlrCompra = true;
      this.indTotal = true;
      this.indData = true;

    } else if (!this.indReview) {
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

  voltar() {
    if (!this.indReview) {
      this.indBotSalvar = true;
      this.indBotProximo = false;
      this.indBotVoltar = true;
    } else if (this.indReview) {
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

  cadastrarCompra() {
    this.montarObjetoParaSalvar();
    
    let subscription = this._compraService.salvarCompra(this.compraList).subscribe(data => {
      subscription.unsubscribe();
      if(data.tipo == "SUCESSO"){
        this._spinnerService.setAlert(data.tipo, data.mensagem, true);
      }else{
        this._spinnerService.setAlert(data.tipo, data.mensagem, false);
      }
    });
    
    this.closedDialog();
  }

  montarObjetoParaSalvar(){

    let acaoEscolhida = this._acaoList.filter(a =>{
      return a.nomeAcao == this._campoAtivo
    }).map(a => {
      return a;
    });

    this.compraList.push(acaoEscolhida[0].id);
    this.compraList.push(this._campoQtd);
    this.compraList.push(this._campoVlrCompra);
    this.compraList.push(this._campoTotal.replace(".", ","));
    this.compraList.push(this._campoData);
  }

  closedDialog() {
    this.dialogRef.close();
  }

}
