import { ItemVenda } from './item-venda';
import { Usuario } from './usuario';

export class Vendas{
  id:number;
  usuario: Usuario;
  status : string;
  pagamento : string;
  totalItens: number;
  valor : number;
  parcela : number;
  valorParcela : number;
  item: ItemVenda[] = [];
  dataVenda : string;
}
