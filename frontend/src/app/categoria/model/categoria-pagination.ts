import { Categoria } from './categoria';

export class CategoriaPagination {

  content        : Categoria[] = [];
  linhas         : number;
  totalElements  : number;
  totalPages     : number;
  busca          : string;
  size           : number;

}
