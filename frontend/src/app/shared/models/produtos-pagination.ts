import { Produto } from '../../shared/models/produto';

export class ProdutosPagination {

  content        : Produto[] = [];
  linhas         : number;
  totalElements  : number;
  totalPages     : number;
  busca          : string;
  size           : number;

}
