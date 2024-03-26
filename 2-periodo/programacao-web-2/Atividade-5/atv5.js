function exibirMensagemDeBoasVindas() {
    alert("Bem-vindo! Esperamos que você aproveite sua visita ao nosso site.");
}

window.onload = exibirMensagemDeBoasVindas;

function verificarParOuImpar(numero) {
    return numero % 2 === 0;
}

function calcularMediaAritmetica(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    return soma / numeros.length;
}

function converterParaCaixaAlta(string) {
    return string.toUpperCase();
}

function verificarPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    let divisor = 5;
    while (divisor * divisor <= numero) {
        if (numero % divisor === 0 || numero % (divisor + 2) === 0) return false;
        divisor += 6;
    }
    return true;
}

function verificarPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    let divisor = 5;
    while (divisor * divisor <= numero) {
        if (numero % divisor === 0 || numero % (divisor + 2) === 0) return false;
        divisor += 6;
    }
    return true;
}

function inverterArray(array) {
    return array.reverse();
}

function inverterArray(array) {
    return array.reverse();
}

function converterParaBinario(numero) {
    return numero.toString(2);
}

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}


