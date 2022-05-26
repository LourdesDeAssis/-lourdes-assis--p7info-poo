import {Ponto} from './ponto'
import { Quadrilatero } from "./quadrilatero"

let ponto_A = new Ponto(0, 8)
let ponto_B = new Ponto(10, 0)

let ponto_C = new Ponto(5, 0)
let ponto_D = new Ponto(12, 10)
let ponto_E = new Ponto(10, 6)

let Quad = new Quadrilatero(ponto_A,ponto_B)

console.log(Quad.pertencerArea(ponto_C)? "Ponto C está contido no Quadrilátero": "Ponto C não está contido no Quadrilátero")
console.log(Quad.pertencerArea(ponto_D)? "Ponto D está contido no Quadrilátero": "Ponto D não está contido no Quadrilátero")
console.log(Quad.pertencerArea(ponto_E)? "Ponto E está contido noo Quadrilátero": "Ponto E não está contido no Quadrilátero")