// A nossa lista principal, organizada de A a Z
const convidados = ["Ricardo", "Ana", "Carlos", "Amanda", "Pedro", "Aline", "Bia", "Lucas", "Tiago"].sort();

// Capturando os elementos HTML
const ulLista1 = document.getElementById('ul-lista1');
const ulLista2 = document.getElementById('ul-lista2');
const ulLista3 = document.getElementById('ul-lista3');
const spanContagem = document.getElementById('contagem-a');

let contadorA = 0;

// ==========================================
// PREENCHENDO AS LISTAS COM O LOOP
// ==========================================
for (let i = 0; i < convidados.length; i++) {
    let nome = convidados[i];

    // Regra 1: Maiúsculas
    let li1 = document.createElement('li');
    li1.textContent = nome.toUpperCase();
    ulLista1.appendChild(li1);

    // Regra 2: Lista Normal
    let li2 = document.createElement('li');
    li2.textContent = nome;
    ulLista2.appendChild(li2);

    // Contagem da letra A
    if (nome.charAt(0).toUpperCase() === 'A') {
        contadorA++; 
    }

    // Regra 3: Exatamente 5 letras
    if (nome.length === 5) {
        let li3 = document.createElement('li');
        li3.textContent = nome;
        ulLista3.appendChild(li3);
    }
}

// Atualiza o total de nomes com A no HTML
spanContagem.textContent = contadorA;

// ==========================================
// FUNÇÃO PARA TROCAR AS ABAS E OS BOTÕES
// ==========================================
function exibirSecao(idSecao, idBotaoClicado) {
    // Esconde tudo
    document.getElementById('secao-lista1').classList.add('oculta');
    document.getElementById('secao-lista2').classList.add('oculta');
    document.getElementById('secao-lista3').classList.add('oculta');
    
    // Tira o 'ativo' de todos os botões
    document.getElementById('btn-lista1').classList.remove('ativo');
    document.getElementById('btn-lista2').classList.remove('ativo');
    document.getElementById('btn-lista3').classList.remove('ativo');

    // Mostra a seção certa e marca o botão clicado
    document.getElementById(idSecao).classList.remove('oculta');
    document.getElementById(idBotaoClicado).classList.add('ativo');
}

// Eventos de clique
document.getElementById('btn-lista1').addEventListener('click', function() {
    exibirSecao('secao-lista1', 'btn-lista1');
});

document.getElementById('btn-lista2').addEventListener('click', function() {
    exibirSecao('secao-lista2', 'btn-lista2');
});

document.getElementById('btn-lista3').addEventListener('click', function() {
    exibirSecao('secao-lista3', 'btn-lista3');
});
