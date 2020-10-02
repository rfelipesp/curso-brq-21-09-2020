import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  public alunoForm : FormGroup;
  public isEdicao : boolean = false;
  private idAluno : number = 0;
  public textoBotao : string = 'Salvar';

  constructor(
      private formBuilder : FormBuilder,
      private alunoService : AlunoService,
      private activateRout : ActivatedRoute,
      private router : Router,
      private toastr : ToastrService
      ) {

    this.alunoForm = this.formBuilder.group( {
      id    : [ '', []],
      nome  : [ '', [ Validators.required ] ],
      ra    : [ '', [ Validators.required, Validators.maxLength(5) ] ],
      curso : [ '', [ Validators.required ] ]

    } );
  }

  ngOnInit(): void {
    this.activateRout.params
      .subscribe(
        (parametros) => {
          console.log(parametros);

          if(parametros.id){
              this.isEdicao = true;
              this.textoBotao = 'Editar';
              this.getOneAluno(parametros.id);
              this.idAluno = parametros.id;
          }

        }
      );
  }

  onSubmit(){
    if(this.isEdicao){
      this.updateAluno(this.idAluno, this.alunoForm.value );
    }else{
      this.createAluno(this.alunoForm.value);
    }
  }

  createAluno(aluno){
    this.alunoService.createAluno(aluno)
      .subscribe( (resultado : any) => {
        this.alunoForm = resultado;
        this.toastr.success('Aluno cadastrado com sucesso!');
        this.router.navigate(['/alunos']);
      },
        (error) => {
          this.toastr.error('Erro ao tentar cadastrar aluno');
        }
      )
  }

  private updateAluno(id, aluno){
    this.alunoService.updateAluno(id, aluno)
      .subscribe(
        (dados)=>{
          console.log(dados);
          // alert(JSON.stringify(dados));
          this.toastr.success('Aluno alterado com sucesso!');
          this.router.navigate(['/alunos']);
        },
        (error) => {
          this.toastr.error('Erro ao tentar alterar aluno');
          // alert('Erro ao atualizar o aluno');
        }
      );
  }


  private getOneAluno(id){
    this.alunoService.getOneAluno(id)
      .subscribe(
        (dados)=>{
          console.log(dados);
          this.alunoForm.patchValue(dados);
        }
      );
  }


  public isErrorField(fieldName){
    return ( this.alunoForm.get( fieldName ).valid == false && this.alunoForm.get( fieldName ).touched == true );
  }




}
