let dataNascimento = prompt("Digite sua data de nascimento (Formato: AAAA-MM-DD):");
const dataNascimentoObj = new Date(dataNascimento);
const dataAtual = new Date();
const idade = dataAtual.getFullYear() - dataNascimentoObj.getFullYear();

if (
    dataAtual.getMonth() < dataNascimentoObj.getMonth() ||
    (dataAtual.getMonth() === dataNascimentoObj.getMonth() && dataAtual.getDate() < dataNascimentoObj.getDate())
) {
    idade--;
}

if (idade >= 18) {
    console.log("Você tem " + idade + " anos. Você é maior de idade.");
} else {
    console.log("Você tem " + idade + " anos. Você é menor de idade.");
}
