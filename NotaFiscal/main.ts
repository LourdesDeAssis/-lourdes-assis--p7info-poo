//
//
//
//

import {Cliente} from "./cliente"
import {TipoCliente} from "./tipo_cliente"
import {Produto} from "./produto"
import {NotaFiscal} from "./nota_fiscal"
import {ItemNotaFiscal} from "./item_nota_fiscal"

//Criar um Cliente 

let cliente = new Cliente(1, "Maria Perreira Jules", 100, "208.783.997-31",TipoCliente.PESSOA_FISICA);

console.log(cliente);
console.log('++++++++++++++++++++++');
console.log("Id=" + cliente.getid());
console.log("Nome=" + cliente.getnome());
console.log("Codigo=" + cliente.getcodigo());
console.log("CnpjCpf=" + cliente.getcnpjcpf());
console.log("TipoCliente=" + cliente.gettipo());

let produto1 = new Produto(1, 150, "Pão Liz", 2.50);
let prpduto2 = new Produto(1, 150, "Arroz Tata", 5.10);

let nf = new NotaFiscal(1, 201, cliente);

let itnf1 = new ItemNotaFiscal(1, 1, 10, produto1);
let itnf2 = new ItemNotaFiscal(2, 2, 10, produto2);


itnf1.valorItemNotaFiscal();
itnf2.valorItemNotaFiscal();



nf.adicionarItem(itnf1);
nf.adicionarItem(itnf2);



console.log(nf);
console.log('++++++++++++++++++++++');

nf.ValorTotal()
