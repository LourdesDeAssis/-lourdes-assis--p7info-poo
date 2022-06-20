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
        this.valorNota += item.valor;
    }


    calcularValorNotaFiscal() : void{
        let total = 0

        for(let i = 0; i < this.items.length; i++){
        let valor = this.items[i].getquant() * this.items[i].getpreco()
        total+=valor}

        console.log("O TOTAL DA CONTA É: R$" + total)
  
    }

    // Para apresentar a nota fiscal conforme as orientações 
    
    imprimirNotaFiscal(): void {
        
    var data = new Date();
    console.log("--------------------------------------------------------------------------------------------------------------------")
    console.log("NOTA FISCAL                                                                                                   ", data)
    console.log("Cliente:",this.cliente.getcodigo(), "      Nome:",this.cliente.getnome() )
    console.log("CPF:",this.cliente.getcnpjcpf())
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("ITENS")
    console.log("--------------------------------------------------------------------------------------------------------------------")
    console.log("Seq    descrição                                                               QTD        Preco UNIT        Preço   ")
    console.log("------------------------------------------------------------------------      -----     -------------     ----------")
    for(let count = 0; count < this.items.length; count++){
        let precoTotal =  this.items[count].getquant() * this.items[count].produto.getprecoUnico()
        this.precoTotal += precoTotal
        console.log("%i       %s                                                       %f            %f              %f  ",
        this.items[count].getsequencial(), this.items[count].produto.getdescricao(), this.items[count].getquant(), this.items[count].produto.getprecoUnico(), precoTotal)
    }
    console.log("")

    }
    
    PrecoTotal(): 

    
}
