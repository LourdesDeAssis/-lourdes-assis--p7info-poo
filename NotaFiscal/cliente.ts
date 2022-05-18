//
//
//
//

import { TipoCliente } from "./tipo_cliente";
export class Cliente {

    /* Atributos */
    private codigo : number; 
    private cnpjcpf: string;
    private tipo: TipoCliente
    private id: number;
    private nome: string;    

    /* Métodos */

    /* Método Construtor -> determina que ações devem ser executadas quando da criação de um objeto */    
    constructor (  codigo: number, cnpjcpf: string, tipo: TipoCliente, id: number, nome: string) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.cnpjcpf = cnpjcpf;
        this.tipo = tipo; 
    }

    /* Métodos Acessores -> forma eficiente de proteger os dados manipulados dentro da classe, além de determinar onde esta classe poderá ser manipulada. */
        getcodigo(): number {
        return this.codigo;
    }

    getcnpjcpf(): string {
        return this.cnpjcpf;
    }

    gettipo(): TipoCliente {
        return this.tipo;
    }
    getid(): number {
        return this.id;
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

    settipo(tipo: TipoCliente) : void {
        this.tipo = tipo;
    }


}
