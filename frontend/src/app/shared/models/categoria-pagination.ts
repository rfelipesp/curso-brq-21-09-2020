import { Categoria } from 'src/app/shared/models/categoria';


export class CategoriaPagination {

  content        : Categoria[] = [];
  linhas         : number;
  totalElements  : number;
  totalPages     : number;
  busca          : string;
  size           : number;

}
