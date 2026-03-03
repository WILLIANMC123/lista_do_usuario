// Nossa lista original de convidados
const convidados = ["Ana", "Carlos", "Amanda", "Pedro", "Alberto", "Bia", "Ricardo"];

// Selecionando os elementos do HTML onde vamos injetar os dados
const ulMaiusculas = document.getElementById('lista-maiusculas');
const spanContagemA = document.getElementById('contagem-a');
const ulMaisCinco = document.getElementById('lista-mais-cinco');

// Variável para armazenar a contagem de nomes com "A"
let contadorLetraA = 0;

// 1. Loop para nomes em Maiúsculo e contagem da letra "A"
for (let i = 0; i < convidados.length; i++) {
    let nome = convidados[i];
    
    // Converte para maiúsculo e adiciona na tela
    let nomeMaiusculo = nome.toUpperCase();
    let li = document.createElement('li');
    li.textContent = nomeMaiusculo;
    ulMaiusculas.appendChild(li);
    
    // Imprime no console (como pedido na instrução de "imprimir")
    console.log(nomeMaiusculo);

    // 2. Conta quantos começam com a letra "A" (ignorando se é 'A' ou 'a')
    if (nome.charAt(0).toUpperCase() === 'A') {
        contadorLetraA++;
    }
}

// Atualiza o HTML com a contagem final
spanContagemA.textContent = contadorLetraA;

// 3. Cria uma nova lista apenas com nomes com mais de 5 letras
const nomesMaisDeCincoLetras = [];
for (let i = 0; i < convidados.length; i++) {
    if (convidados[i].length > 5) {
        nomesMaisDeCincoLetras.push(convidados[i]);
    }
}

// Mostra a lista de nomes com mais de 5 letras no HTML
nomesMaisDeCincoLetras.forEach(function(nome) {
    let li = document.createElement('li');
    li.textContent = nome;
    ulMaisCinco.appendChild(li);
});
