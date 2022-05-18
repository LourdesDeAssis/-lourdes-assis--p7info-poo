export class Produto {

    // Os atributos são: 
    private id: number;
    private codigo : number; 
    private descricao: string;
    private precoUnico : number;    


    // O método construtor:   
    constructor (id : number, codigo: number, descricao: string, precoUnico: number) {
        this.id = id;
        this.codigo = codigo;
        this.descricao = descricao;
        this.precoUnico = precoUnico; 
    }

    // Os métodos acessores: 
    getid(): number {
        return this.id;
    }

    getdescricao(): string {
        return this.descricao;
    }

    getcodigo(): number {
        return this.codigo;
    }

    getprecoUnico(): number {
        return this.precoUnico;
    }

        // Os métodos modificadores:    
    setdescricao(descricao: string): void {
        this.descricao = descricao;
    }

    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setprecoUnico(precoUnico: number): void {
        this.precoUnico = precoUnico;
    } 
    
}
