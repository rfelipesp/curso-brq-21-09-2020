import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditCard, CreditCardValidators } from 'angular-cc-library';
import { Endereco } from 'src/app/shared/models/endereco';
import { ItemVenda } from 'src/app/shared/models/item-venda';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { VendaService } from 'src/app/shared/services/venda.service';

@Component({
  selector: 'app-finalizar-venda',
  templateUrl: './finalizar-venda.component.html',
  styleUrls: ['./finalizar-venda.component.scss']
})
export class FinalizarVendaComponent implements OnInit {

  pagaForm: FormGroup;
  showType: boolean = false;
  card : any ;
  valorTotal;
  frete;

  enderecoObj: Endereco;
  venda: ItemVenda[];

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private localStorage: StorageService,
              private carrinhoService: CarrinhoService,
              private vendaService: VendaService) {
              }

  ngOnInit() {
    if (this.localStorage.getCarrinho() != null) {
      this.carrinhoService.itensCarrinho = this.localStorage.getCarrinho();
    } else {
      this.carrinhoService.itensCarrinho = [];
    }
    this.getCarrinho();

    this.valorTotal=this.carrinhoService.valorTotalFrete()
    //console.log(this.venda)
    this.enderecoObj = this.localStorage.getEndereco();
    this.formBuilder = new FormBuilder();
    this.pagaForm = this.formBuilder.group(
      { nomeCartao: ['', [Validators.required] ],
        numCartao: ['', [CreditCardValidators.validateCCNumber] ],
        exp: ['', [CreditCardValidators.validateExpDate] ],
        cvv: ['', [Validators.required, Validators.maxLength] ],
        'metodo': ['', Validators.required]
      }
    );
  }

  finalizarVenda() {
    this.carrinhoService.fecharVenda();
    this.vendaService.fecharVenda(this.carrinhoService.venda).subscribe(
      (data) => {
        data = data
        console.log(data)
        console.log(this.carrinhoService.itensCarrinho);

        this.carrinhoService.itensCarrinho = this.carrinhoService.criarOuLimparCarrinho()
        this.localStorage.setCarrinho(this.carrinhoService.itensCarrinho)
      }
    )

    console.log(this.pagaForm);
    alert('Pedido realizado com sucesso!');
    this.router.navigateByUrl("/home")
  }

  //validar se os campos forem devidamente preenchidos
   isErrorCampo(nomeCampo){
    return (!this.pagaForm.get(nomeCampo).valid && this.pagaForm.get(nomeCampo).touched );
  }

    getCarrinho(): ItemVenda[] {
      let cart: ItemVenda[] = this.localStorage.getCarrinho();
      return cart;
    }


  tipoCard(numCartao): void{
     this.card = CreditCard.cardFromNumber(numCartao);

     if(this.card){
      console.log(this.card.type);
       this.showType = true;
     }

    if (numCartao != null){
      console.log(this.card);
    }
  }

  getValorTotal(){
    return this.carrinhoService.totalItensCarrinho();
  }
}
