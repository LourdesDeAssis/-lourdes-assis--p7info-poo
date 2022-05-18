
import {Produto} from "./produto"

export class ItemNotaFiscal {

    /* Atributos são as propriedades de um objeto */
    identificacao: number;
    sequencial: number; 
    quantidade: number;
    produto : Produto;
    valor : number;    

    /* Métodos são as ações que um objeto pode realizar. */

    /* Método Construtor */    
    constructor (identificacao : number, sequencial: number, quantidade: number, produto: Produto) {
        this.identificacao = identicacao;
        this.sequencial = sequencial;
        this.quantidade = quantidade;
        this.produto = produto; 
        this.valor = 0.0;
    }

    /* Métodos Acessores */
    getid(): number {
        return this.identificacao;
    }

    getsequencial(): number {
        return this.sequencial;
    }

    getquantidade(): number {
        return this.quantidade;
    }

    getproduto() : Produto {
        return this.produto;
    }

    getvalor(): number {
        return this.valor;
    }

        /* Métodos Modificadores */     
    setsequencial(sequencial: number): void {
        this.sequencial = sequencial;
    }

    
    valorItemNotaFiscal() : void {
        this.valor = this.getproduto().getvalorUnitario();
    }
    
}
