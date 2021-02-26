import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-painel',
  templateUrl: './button-painel.component.html',
  styleUrls: ['./button-painel.component.css']
})
export class ButtonPainelComponent implements OnInit {

  @Input() indEditar: boolean = false;
  @Output() notifyCadastrar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectCadastrar(){
    this.notifyCadastrar.emit(true);  
  }

}
