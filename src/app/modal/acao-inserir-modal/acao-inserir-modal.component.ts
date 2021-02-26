import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/default/spinner/spinner.service';
import { Acao } from 'src/app/model/acao.model';
import { AcaoService } from 'src/app/pages/acao/acao.service';

@Component({
  selector: 'app-acao-inserir-modal',
  templateUrl: './acao-inserir-modal.component.html',
  styleUrls: ['./acao-inserir-modal.component.css']
})
export class AcaoInserirModalComponent implements OnInit {

  subscription: Subscription = new Subscription;
  
  private _campoCadastrar: string = "";
  ativosList: Acao[] = [];
  acao: Acao = new Acao;
  usuario: string = "";
  log: string = "";
  acaoList: any[] = [];
  ativoExistente: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AcaoInserirModalComponent>,
    private _acaoService: AcaoService,
    private spinnerService: SpinnerService,

    @Inject(MAT_DIALOG_DATA)  public data: any) 
  { }

  ngOnInit(): void {
    if(this.data) {
      this.ativosList = this.data.ativosList;
      this.usuario = this.data.usuario
    }
  }

  closedDialog() {
    this.dialogRef.close();
  }

  verificarCampoAtivo(evento: string){
    if (evento.length > 0) {
      this._campoCadastrar = evento.toLocaleUpperCase();
    }
  }

  selectCadastrarAtivo(){
    this.validarExistenciaAtivo();

    if(!this.ativoExistente){
      this.acaoList.push("A");
      this.acaoList.push(this._campoCadastrar);
      this.acaoList.push(this.usuario);
  
      this.salvarAtivo();
    }
    
  }

  validarExistenciaAtivo(){
    for (let ativoExistente of this.ativosList) {
      if (ativoExistente.nomeAcao == this._campoCadastrar) {
        this.log = "Ativo já cadastrado!";
        this.ativoExistente = true;
      }else{
        this.ativoExistente = false;
      }
    }
  }

  salvarAtivo(){
    let subscription = this._acaoService.salvarAtivo(this.acaoList).subscribe(data => {
      subscription.unsubscribe();
     //this.spinnerService.setAlert("SUCESSO", data.error.error.text);
    });
    
    this._acaoService.setAtualizarTela(true);
    this.closedDialog();
  }

}
