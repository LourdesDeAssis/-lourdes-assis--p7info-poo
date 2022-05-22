imprimirNotaFiscal(): void {
    var data = new Date();
    console.log("--------------------------------------------------------------------------------------------------------------------")
    console.log("NOTA FISCAL                                                                                                   ", data)
    console.log("Cliente:",this.cliente.getcodigo(), "      Nome:",this.cliente.getnome() )
    console.log("CPF:",this.cliente.getcnpjcpf())
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("ITENS")
    console.log("--------------------------------------------------------------------------------------------------------------------")
    console.log("Seq    descrição                                                               QTD        Preco UNIT        Preço   ")
    console.log("------------------------------------------------------------------------      -----     -------------     ----------")
    for(let count = 0; count < this.items.length; count++){
        let precoTotal =  this.items[count].getquant() * this.items[count].produto.getprecoUnico()
        this.precoTotal += precoTotal
        console.log("%i       %s                                                       %f            %f              %f  ",
        this.items[count].getsequencial(), this.items[count].produto.getdescricao(), this.items[count].getquant(), this.items[count].produto.getprecoUnico(), precoTotal)
    }
    console.log("")
}