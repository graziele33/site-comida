programa {
  funcao inicio() {

    //Declaraçao de variaveis
    cadeia nomeFuncuinario
    real salarioFixo, valorVendas, bonus, salarioTotal

    escreva("Programa para calcular o bonus salarial \n\n")

    escreva("unforme o nome do funcionario")
    leia("nomeFuncionario")
    escreva("informe o Salario fixo")
    leia("SalarioFixo")
    escreva("informe suas vendas no mes:")
    leia("valorVendasMes")

    // Calculo bonus Salarial
    bonus = valorVendasMes * 0.1
     
    //Calculo do Salario Total
    salarioTotal = salarioFixo + bonus

    //Saida de dados
    escreva("nome do funcionario:" + nomeFuncionario + "\n")
    escreva("Salario fixo")
    
  }
}
