class Stack{
    
    stack: number[] = []
    topoDaPilha: number = -1
    max = 4

    vazio(): number{
        if(this.topoDaPilha == -1){
            return 1
        }else{
            return 0
        }
    }
    cheio(): number{
        if(this.topoDaPilha == this.max){
            return 1
        }else{
            return 0
        }
    }
    push(num: number): void{
        if(this.cheio() == 1){
            console.log('A pilha se encontra cheia')
        }else{
            this.topoDaPilha++
            this.stack[this.topoDaPilha] = num
            console.log(+num+' se encontra acrestado à lista')
        }
    }
    pop(): number | void{
        if(this.vazio() == 1){
            console.log('A pilha se encontra vazia')
        }else{
            let aux = this.stack[this.topoDaPilha]
            console.log(+aux+' ')
            this.topoDaPilha--
            return aux
        }
    }
    view(): void{
        if(this.vazio() == 1){
            console.log('A pilha se encontra vazia')
         }else{
            for(let i = 0; i <= this.topoDaPilha; i++){
                console.log('A pilha apresenta o  elemento '+this.stack[i])    
            }
        }
    }
}

let pilha: Stack = new Stack()
pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
console.log('-------------------------')
pilha.view()
console.log('-------------------------')
pilha.pop()
pilha.pop()
console.log('-------------------------')
pilha.view()
console.log('-------------------------')
pilha.pop()
pilha.pop()
console.log('-------------------------')
pilha.view()
