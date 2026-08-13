function calcularDescontado (preco, desconto) {

    let valorDesconto = preco * desconto / 100;
    return preco - valorDesconto
}
let valorFinal = calcularDescontado(100,10);
console.log (valorFinal);
