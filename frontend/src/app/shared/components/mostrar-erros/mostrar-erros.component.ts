import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mostrar-erros',
  templateUrl: './mostrar-erros.component.html',
  styleUrls: ['./mostrar-erros.component.scss']
})
export class MostrarErrosComponent implements OnInit {

  @Input() public isError : boolean = false;
  @Input() public mensagem : string;

  @Output() public notificador = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDivClick(){
    return this.notificador.emit(true);
  }

}
