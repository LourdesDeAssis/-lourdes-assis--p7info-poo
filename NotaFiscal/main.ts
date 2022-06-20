import {Cliente} from "./cliente"
import {FormaCliente} from "./forma_cliente"
import {Produto} from "./produto"
import {NotaFiscal} from "./nota_fiscal"
import {ItemNotaFiscal} from "./item_nota_fiscal"

//Criar um Cliente 

let cliente = new Cliente(1, "Ana Felipe Bento", 100, "202.446.187-81",FormaCliente.PessoaFisica);

console.log(cliente);
console.log('++++++++++++++++++++++')
console.log("Id=" + cliente.getid());
console.log("Nome=" + cliente.getnome());
console.log("Codigo=" + cliente.getcodigo());
console.log("CnpjCpf=" + cliente.getcnpjcpf());
console.log("FormaCliente=" + cliente.setforma());

let p1 = new Produto(1, 150, "CAFÉ PURO", 8.00);
let p2 = new Produto(9, 500,"ARROZ BRANCO", 7.00);


let nf = new NotaFiscal(1, 201, cliente);

let itnf1 = new ItemNotaFiscal(1, 1, 10, p1);
let itnf2 = new ItemNotaFiscal(9, 9, 10, p2);


itnf1.PrecoItemNotaFiscal();
itnf2.PrecoItemNotaFiscal();



nf.adicionarItem(itnf1);
nf.adicionarItem(itnf2);



console.log(nf);
console.log('++++++++++++++++++++++')
nf.calcularValorNotaFiscal()
nf.PrecoTotal()
