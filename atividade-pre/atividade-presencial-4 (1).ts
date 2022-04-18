class Queue{ 
    Pessoas: string[] = [] 
    maxQueue = 5 
    fim = 0 
    nprimeiro = 0 
    nItems = 0 

     
    isEmpty(): number{ 
        if(this.nItems == 0){ 
            return 1 
        }else{ 
            return 0 
        } 
    } /
     
    isFull(): number{ 
        if(this.fim == this.maxQueue){ 
            return 1 
        }else{ 
            return 0 
        } 
    } 

     
    addQueue(nome: string): void{ 
        if(this.isFull() == 1){ 
            console.log('Fila está lotada!') 
        }else{ 
            this.Pessoas[this.fim] = nome 
            console.log(nome+' adentrou na fila') 
            this.fim++ 
            this.nItems++ 
        } 
    } 
     
    removeQueue():string | void { 
        if(this.isEmpty() == 1){ 
            console.log('A fila está sem nada') 
        }else{ 
            let temp = this.Pessoas[this.nprimeiro] 
            console.log(this.Pessoas[this.nprimeiro]+' saiu da fila') 
            this.nprimeiro++ 
            this.nItems-- 
            return temp 
        } 
    } 
     
    viewQueue(): void{ 
        if(this.isEmpty() == 1){ 
            console.log('Fila não possui nada) 
        }else{ 
            let np = this.nprimeiro 
            for(let i=0; i < this.nItems; i++){ 
                console.log(this.Pessoas[np]+' está na fila') 
                np++ 
            } 
        } 
    } 
} 

let fila: Queue = new Queue() 


fila.addQueue('Maria') 
fila.addQueue('Lo') 
fila.addQueue('Silva') 
fila.addQueue('Assis')  

fila.removeQueue() 
fila.removeQueue() 
fila.removeQueue()

fila.addQueue('Urdes')

fila.viewQueue() 

fila.removeQueue() 
fila.removeQueue() 

fila.viewQueue()