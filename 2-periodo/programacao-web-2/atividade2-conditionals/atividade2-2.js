const randomNumber = Math.floor(Math.random() * 100) + 1;

let tentative;

do {
    tentative = prompt("Adivinhe o número secreto entre 1 e 100:");

    tentative = parseInt(tentative);

    // Verifica se a tentativa é válida
    if (isNaN(tentative) || tentative < 1 || tentative > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
    } else {
        // Compara a tentativa do usuário com o número secreto
        if (tentative < randomNumber) {
            alert("Tente um número maior.");
        } else if (tentative > randomNumber) {
            alert("Tente um número menor.");
        } else {
            alert("Parabéns! Você acertou o número secreto!");
        }
    }
} while (tentative !== randomNumber);