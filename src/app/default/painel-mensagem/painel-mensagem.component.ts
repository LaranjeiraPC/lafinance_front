import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-mensagem',
  templateUrl: './painel-mensagem.component.html',
  styleUrls: ['./painel-mensagem.component.css']
})
export class PainelMensagemComponent implements OnInit {

  @Input() mensagem: string = "";

  constructor() { }

  ngOnInit() {
  }

}
