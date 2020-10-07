import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.scss']
})
export class MeuPrimeiroComponent implements OnInit {

  titulo = 'Treinamento Angular';
  curso = 'Java';

  series = [
    {nome : 'peakyblinders',ano:2013, canal : 'netflix' },
    {nome : 'the boys',ano:2019, canal : 'amazon-prime' },
    {nome : 'breaking bed',ano:2008, canal : 'amazon-prime' }
  ]

  hoje = new Date();

  numero_cpf = '28686736866';

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
