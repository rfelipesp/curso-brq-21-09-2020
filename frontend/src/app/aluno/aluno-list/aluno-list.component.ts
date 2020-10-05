import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  public alunos   : any;
  public aluno   : any;
  public alunoId  : number;

  constructor(private alunoService : AlunoService) { }

  ngOnInit(): void {
    this.getAlunos();
  }

  meuEvento(){
    this.alunoService.mostrarMensagem();
  }

  getAlunos(){
    this.alunoService.getAllAlunos()
      .subscribe( (resultado) => {
        console.log(resultado);
        this.alunos = resultado;
      },
      (error) => {
        console.log(error);
      }
      );
  }

  public onDelete(id){
    this.alunoService.deleteAluno(id)
    .subscribe(
      (dados)=>{
        console.log(dados);
        alert('Aluno excluído com sucesso!');
        this.getAlunos();

      }
    );
  }

}
