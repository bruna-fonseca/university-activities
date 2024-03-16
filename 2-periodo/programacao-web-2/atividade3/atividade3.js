class BankAccount {
    constructor(saldo) {
        this.saldo = saldo
        this.main()
    }

    main() {
    console.log("Escolha uma operação:");
    console.log("1. Verificar saldo");
    console.log("2. Sacar");
    console.log("3. Depositar");
    console.log("4. Tranferência");
    console.log("5 Atualizar cadastro");
    console.log("6. Avaliar crédito");
    console.log("7. Sair");
    
    let opc = window.prompt("Escolha a opção desejada:")
    switch (parseInt(opc)) {
        case 1:
            this.verificarSaldo()
            break
        case 2:
            let valorSaque = window.prompt("Valor a ser sacado:")
            this.realizarSaque(this.saldo, parseInt(valorSaque))
            break
        case 3:
            let valorDeposito = window.prompt("Valor a ser depositado:")
            this.realizarDeposito(this.saldo, parseInt(valorDeposito))
            break
        case 4:
            let saldoDestino = window.prompt("Saldo Destino")
            let valorTransferencia = window.prompt("Valor da transferência: ")
            let limiteTransferencia = window.prompt("Limite de valor de transfeência: ")
            this.realizarTransferencia(this.saldo, parseInt(saldoDestino), parseInt(valorTransferencia), parseInt(limiteTransferencia))
            break
        case 5:
            let statusCadastro = window.confirm("Seu cadastro está ativo?")
            this.atualizarCadastro(statusCadastro, this.saldo)
            break
        case 6:
// saldo, historicoCredito, rendaMensal
            let historicoCredito = window.confirm("Histórico de crédito é positivo ou negativo?")
            let rendaMensal = window.prompt("Informe sua renda mensal: ")
            this.avaliarCredito(this.saldo, historicoCredito, parseInt(rendaMensal))
            break
        case 7:
            console.log("Operação encerrado com sucesso!")
            break
        default:
            console.log("Opção inválida! Tente novamente!")
            break
    }
    }

    verificarSaldo() {
        return (this.saldo > 0) ? console.log("Saldo positivo") : console.log("Saldo negativo");
    }

    realizarSaque(saldoAtual, valorSaque) {
        if (valorSaque <= saldoAtual) {
            saldoAtual = saldoAtual - valorSaque
            console.log(`Saque realizado com sucesso. Saldo atual: R$ ${ saldoAtual }`);
        } else {
            console.log("Saldo insuficiente");
        }
    }

    realizarDeposito(saldoAtual, valorDeposito) {
        saldoAtual = saldoAtual + valorDeposito
        console.log(`Depósito realizado com sucesso. Novo saldo: R$${ saldoAtual }`);
    }

    realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {
        if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
            saldoOrigem -= valorTransferencia
            saldoDestino += valorTransferencia
            console.log("Tranferencia realizada com sucesso");
        } else {
            console.log("Não foi possível realizar a tranferência");
        }
    }

    checarChequeEspecial(saldo) {
        return saldo < 0 ? console.log("Dentro do limite do cheque especial") : console.log("Fora do limite do cheque especial")
    }

    atualizarCadastro(cadastroAtivo, saldo) {
        if (cadastroAtivo) {
            saldo > 0 ? console.log("Cadastro ativo e saldo positivo") : console.log("Cadastro ativo mas precisa regularizar saldo");
          } else {
            console.log("Por favor, atualize seu cadastro");
        
          }
    }

    avaliarCredito(saldo, historicoCredito, rendaMensal) {
        (saldo > 1000 && historicoCredito && rendaMensal > 3000) ? console.log("Crédito aprovado") : console.log("Crédito negado")
        }
}

window.onload = () => {
   new BankAccount(300)
};