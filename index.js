var idade
var nome 
nome = prompt('Qual é o seu nome?')
idade = prompt('Quantos anos você tem?')
console.log(nome)
console.log(idade)

var anoNascimento 
anoNascimento = prompt('Em que ano você nasceu?')
console.log(anoNascimento)

var valorIdade
if(idade % 2 == 0){
    valorIdade = 'PAR'
    console.log('A sua idade é PAR')
} else {
    valorIdade = 'IMPAR'
    console.log('A sua idade é IMPAR')
}
var valorAnoNascimento 
if(anoNascimento % 2 == 0){
    valorAnoNascimento = 'PAR'
    console.log('Seu ano de Nascimento é PAR!')
} else {
    valorAnoNascimento = 'IMPAR'
    console.log('Seu ano de Nascimento é IMPAR!')
}
    alert(`Olá ${nome} você tem ${idade} anos que é um número ${valorIdade} e nasceu no ano de ${anoNascimento} que é um número ${valorAnoNascimento}!`)

if(idade >=18){
    console.log('Está liberado o consumo de bebidas alcoólicas!')
    alert('Você pode beber bebidas alcoólicas')
} else {
    console.log('Não está liberado o consumo de bebidas alcoólicas!')
    alert('Você não pode consumir bebidas alcoólicas!')
}
    




