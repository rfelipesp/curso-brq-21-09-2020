import { Imagem } from './imagem';

export class ProdutoDto{
    id:number;
    nome:string;
    preco:number;
    imagens:Array<Imagem>;
}
