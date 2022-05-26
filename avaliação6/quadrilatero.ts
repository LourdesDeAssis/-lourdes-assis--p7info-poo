
import {Ponto} from './ponto'

export class Quadrilatero{
    private ponto_A: Ponto
    private ponto_B: Ponto

    constructor(Ponto_A: Ponto, Ponto_B: Ponto){
        this.ponto_A = Ponto_A
        this.ponto_B = Ponto_B
    }

    pertencerArea(ponto: Ponto): boolean{
        if(this.ponto_A.getX <= ponto.getX && ponto.getX <= this.ponto_B.getX
             && this.ponto_B.getY <= ponto.getY && ponto.getY <= this.ponto_A.getY  ){
                 return true
             }else{
                 return false
             }
    }
}