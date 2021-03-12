import { Component, Input, OnInit } from '@angular/core';
import { Acao } from 'src/app/model/acao.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() ativo: Acao;
  @Input() quantidade: number;
  @Input() valorUnitario: number;

  constructor() { }

  ngOnInit() {
  }

}
