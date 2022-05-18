
import {Produto} from "./produto"

export class ItemNotaFiscal {

 
    id: number;
    quant: number;
    produto : Produto;
    preco : number; 
    sequencial: number; 
   

    
    constructor (id : number, 
                 sequencial: number, 
                 quant: number, 
                 produto: Produto
                 ) {
        this.id = id;
        this.sequencial = sequencial;
        this.quant = quant;
        this.produto = produto; 
        this.preco = 0.0;
    }

  
    getid(): number {
        return this.id;
    }

    getsequencial(): number {
        return this.sequencial;
    }

    getquant(): number {
        return this.quant;
    }

    getproduto() : Produto {
        return this.produto;
    }

    getpreco(): number {
        return this.preco;
    }

        // Os métodos modificadores:    
    setsequencial(sequencial: number): void {
        this.sequencial = sequencial;
    }

    
    PrecoItemNotaFiscal() : void {
        this.preco = this.getproduto().getprecoUnico();
    }
    
}
