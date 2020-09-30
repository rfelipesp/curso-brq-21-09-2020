import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-erros',
  templateUrl: './mostrar-erros.component.html',
  styleUrls: ['./mostrar-erros.component.scss']
})
export class MostrarErrosComponent implements OnInit {

  @Input() public isError : boolean = false;
  @Input() public mensagem : string;

  constructor() { }

  ngOnInit(): void {
  }

}
