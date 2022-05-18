import { FormaCliente } from "./forma_cliente";
export class Cliente {

    // Os atributos são: 
    private identificacao: number;
    private nome: string;
    private cnpjcpf: string;
    private forma: FormaCliente; 
    private codigo : number; 
   

    // Os métodos são: 

    //Método Construtor -> determina que ações devem ser executadas quando da criação de um objeto 
    constructor (identificacao : number, nome: string, codigo: number, cnpjcpf: string, forma: FormaCliente) {
        this.identificacao = identificacao;
        this.nome = nome;
        this.codigo = codigo;
        this.cnpjcpf = cnpjcpf;
        this.forma = forma; 
    }

    //Métodos Acessores -> forma eficiente de proteger os dados manipulados dentro da classe, além de determinar onde esta classe poderá ser manipulada.
    getid(): number {
        return this.identificacao;
    }

    getnome(): string {
        return this.nome;
    }

    getcodigo(): number {
        return this.codigo;
    }

    getcnpjcpf(): string {
        return this.cnpjcpf;
    }

    gettipo(): FormaCliente {
        return this.forma;
    }

    //Métodos Modificadores -> podem modificar as informações contidas
      
    setnome(nome: string): void {
        this.nome = nome;
    }

    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setcnpjcpf(cnpjcpf: string): void {
        this.cnpjcpf = cnpjcpf;
    } 

    setforma(forma: FormaCliente) : void {
        this.forma = forma;
    }


}
}
