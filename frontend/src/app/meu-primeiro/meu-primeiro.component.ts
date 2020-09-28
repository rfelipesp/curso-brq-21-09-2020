import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.scss']
})
export class MeuPrimeiroComponent implements OnInit {

  titulo = 'Treinamento Angular';
  curso = 'Java';

  constructor() { }

  ngOnInit(): void {
  }

  getNome(){
    return 'Renato';
  }

  getClass(){
    return 'btn btn-primary';
  }

  onInput(digitei){
    this.titulo = digitei;
  }

  onButtonClick(){
    this.titulo = "Outro Treinamento";
  }

  isDisable(){
    let nome;
    return true;
  }

}
