import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SpinnerService } from 'src/app/default/spinner/spinner.service';
import { AcaoService } from 'src/app/pages/acao/acao.service';

@Component({
  selector: 'app-acao-excluir-modal',
  templateUrl: './acao-excluir-modal.component.html',
  styleUrls: ['./acao-excluir-modal.component.css']
})
export class AcaoExcluirModalComponent implements OnInit {

  private _id: any;
  private _url: string;
  object: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<AcaoExcluirModalComponent>,
    private _acaoService: AcaoService,
    private spinnerService: SpinnerService,
    
    @Inject(MAT_DIALOG_DATA)  public data: any
  ) { }

  ngOnInit() {
    if(this.data) {
      this._id = this.data.id;
      this._url = this.data.url
    }
  }

  excluirRegistro(){
    this.object.push(this._id.id);
    let subscription = this._acaoService.deletarAtivo(this.object, this._url).subscribe(data => {
      subscription.unsubscribe();
      if(data.tipo == "SUCESSO"){
        this.spinnerService.setAlert(data.tipo, data.mensagem, true);
      }else{
        this.spinnerService.setAlert(data.tipo, data.mensagem, false);
      }
    });
    
    this.closedDialog();
  }

  closedDialog() {
    this.dialogRef.close();
  }

}
