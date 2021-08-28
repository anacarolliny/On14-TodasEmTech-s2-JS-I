alert("Seja bem vinde ao meu site");

alert("Agora vamos para a soma")
alert("A soma de 87+96 é: " + (87+96));

alert("Agora vamos para a multiplicação")
alert("O valor da multiplicação de 8*5 é: " + (8*5));

alert("A minha lista de compras é : ")
let compras = ["Arroz ", "Feijão ", "Leite ", "Refrigerante ", " Café"];
alert(compras);

console.log("Ola mundo")

var entrada = document.querySelector("input")
//var ano = entrada.value // preciso colocar dentro da função porque dentro da função ele tem que pegar a variavel ano e exiba
var saida = document.querySelector("#respostaAno")

//saida.textContent = ano a variavel ano nao existe mais aqui fora entao essa saida nao existe mais, só dentro da função

function cliquei(){ // toda vez q1ue o usuario clicar no botao ele ia imprimir isso no console
var ano = entrada.value
saida.textContent = "Resposta é: " + compras
// dessa maneira ja aparece no console o valor digitado
}

/* function hello(){ // aqui a gente declara a função
console.log("Olá, teste de função")
} */

// agora chamar a função para aparecer na tela

//hello()

//console.log(saida.textContent)


// console.log(ano)