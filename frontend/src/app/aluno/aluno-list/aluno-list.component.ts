import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  constructor(private alunoService : AlunoService) { }

  public alunos : any;

  ngOnInit(): void {
    this.getAlunos();
    // Quando a aplicação é iniciado ela passa por aqui
  }

  meuEvento(){
    this.alunoService.mostrarMensagem();
  }

  getAlunos(){
    this.alunoService.getAllAlunos()
      .subscribe( (resultado) => {
        console.log(resultado);
        this.alunos = resultado;
      } );
  }

}
