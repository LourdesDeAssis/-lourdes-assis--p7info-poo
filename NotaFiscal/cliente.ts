//
//
//
//

import { formaCliente } from "./forma_cliente";
export class Cliente {

    /* Atributos */
    private codigo : number; 
    private cnpjcpf: string;
    private forma: formaCliente
    private identificacao: number;
    private nome: string;    

    /* Métodos */

    /* Método Construtor -> determina que ações devem ser executadas quando da criação de um objeto */    
    constructor (  codigo: number, cnpjcpf: string, forma: formaCliente, identificacao: number, nome: string) {
        this.identificacao = identificacao;
        this.nome = nome;
        this.codigo = codigo;
        this.cnpjcpf = cnpjcpf;
        this.forma = forma; 
    }

    /* Métodos Acessores -> forma eficiente de proteger os dados manipulados dentro da classe, além de determinar onde esta classe poderá ser manipulada. */
        getcodigo(): number {
        return this.codigo;
    }

    getcnpjcpf(): string {
        return this.cnpjcpf;
    }

    gettipo(): formaCliente {
        return this.forma;
    }
    getid(): number {
        return this.identificacao;
    }

    getnome(): string {
        return this.nome;
    }



    /* Métodos Modificadores -> podem modificar as informações contidas */     
    setnome(nome: string): void {
        this.nome = nome;
    }

    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setcnpjcpf(cnpjcpf: string): void {
        this.cnpjcpf = cnpjcpf;
    } 

    settipo(forma: formaCliente) : void {
        this.forma = forma;
    }


}
