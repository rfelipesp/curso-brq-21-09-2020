import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private alunoService : AlunoService, private activatedRoute : ActivatedRoute) { 
    console.log(this.activatedRoute);

    this.activatedRoute.params.subscribe(
      (parametros) => {
        console.log(parametros);

        if(parametros.id){
          this.alunoId = parametros.id;

          this.alunoService.getOneAluno(this.alunoId)
          .subscribe( (resultado : any) => {
            this.aluno = resultado;
            console.log(this.aluno);
          },
            (error) => {
              alert('Erro ao consultar o aluno');
            }
          )
        }
      }
    );
  }

  ngOnInit(): void {
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
      },
      (error) => {
        console.log(error);
      }
      );
  }

}
