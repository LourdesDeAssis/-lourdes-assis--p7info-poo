//
import {Cliente} from "./cliente";
import {ItemNotaFiscal} from "./item_nota_fiscal";
export class NotaFiscal {

    // Os atributos são:
    id: number;
    cliente: Cliente;
    items :  Array<ItemNotaFiscal>;  
    precoNota : number;
    codigo:number; 
    data: Date;

    // O métodos são: 
   
    constructor (id : number, codigo: number, cliente : Cliente ) {
        this.id = id;
        this.codigo = codigo;
        this.data = new Date(); 
        this.cliente = cliente; 
        this.precoNota =0.0;
        this.items = new Array<ItemNotaFiscal>();


    }

    getid(): number {
        return this.id;
    }

    getcodigo(): number {
        return this.codigo;
    }

    getdata(): Date {
        return this.data;
    }

   
    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setdata(data : Date) : void {
        this.data = data;
    }

     

    adicionarItem(item: ItemNotaFiscal) {
         this.items.push(item);
    }


    calcularValorNotaFiscal() : number {
        let valorCalculado = 0;


        return valorCalculado;

    }

    // Para apresentar a nota fiscal conforme as orientações 
    
    imprimirNotaFiscal(): void {


    }
    
    PrecoTotal(): void{
        let total = 0

        for(let i = 0; i < this.items.length; i++){
        let valor = this.items[i].getquant() * this.items[i].getpreco()
        total+=valor}

        console.log("O TOTAL DA CONTA É: R$" + total)
    }

    
}
