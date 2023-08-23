/*
*Rafael Balthar
*
*/
//Exercício variáveis ///////////////
//Exercício 1

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// O tipo undefined foi impresso pois nenhum valor foi definido para as variáveis

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

// As duas variáveis se tornaram strings, pois todas as respostas de um prompt se tornam strings

console.log("Olá", nome, "você tem", idade, "anos.")

//Usando a conversão Number
let nome = prompt("Informe o seu nome");
let idade = Number(prompt("Informe sua idade"));
console.log (typeof nome);
console.log (typeof idade);
console.log (nome, idade);

//Exercício 2
var clima = prompt("Está frio?")
var aula = prompt("Você foi a aula hoje?")
var chuva = prompt("Está chovendo?")

console.log("Está frio? -",clima)

console.log("Está de dia? -",aula)

console.log("Está chovendo? -",chuva)

//Exercício 3

let a = 10
let b = 20

console.log("a =", a)
console.log("b =", b)

let c = a
 a = b 
 b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//Desafio Variáveis

const resposta1 = prompt("Diga o seu primeiro número")
const resposta2 = prompt("Diga o seu segundo número")
let numero1 = Number(resposta1)
let numero2 = Number(resposta2)

let resultado1 = numero1 + numero2
let resultado2 = numero1 * numero2

console.log("O primeiro número somado ao segundo número resulta em:", resultado1)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", resultado2)
