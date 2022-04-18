
function printDec(valor: number): string{
    let dec = (valor).toString(10)
    return dec
}
function printHex(valor:// number): string{
    let hex = (valor).toString(16)
    return hex
}
function printOct(valor: number): string{
    let oct = (valor).toString(8)
    return oct
}
function printBin(valor: number): string{
    let bin = (valor).toString(2)
    return bin
}

function apresentarTabela(): void{
    console.log('Decimal Octal Hexadecimal  Binario')
    console.log('--------- ------ ----------- -------')
    for( let x = 0; x <=225; x++){
        console.log(`${printDec(x)}  ${printOct(x)}   ${printHex(x)}   ${printBin(x)}`)
    }//
}

apresentarTabela()