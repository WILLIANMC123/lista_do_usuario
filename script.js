// A nossa lista principal (agora com o .sort() para organizar de A a Z desde o início!)
const convidados = ["Ricardo", "Ana", "Carlos", "Amanda", "Pedro", "Aline", "Bia", "Lucas", "Tiago"].sort();

// Capturando os elementos HTML
const ulLista1 = document.getElementById('ul-lista1');
const ulLista2 = document.getElementById('ul-lista2');
const ulLista3 = document.getElementById('ul-lista3');
const spanContagem = document.getElementById('contagem-a');

let contadorA = 0;

// ==========================================
// LOOP ÚNICO PARA PREENCHER TUDO
// ==========================================
for (let i = 0; i < convidados.length; i++) {
    let nome = convidados[i];

    // Regra 1: Imprimir na Lista 1 em MAIÚSCULAS
    let li1 = document.createElement('li');
    li1.textContent = nome.toUpperCase();
    ulLista1.appendChild(li1);

    // Regra 2: Imprimir na Lista 2 o nome normal
    let li2 = document.createElement('li');
    li2.textContent = nome;
    ulLista2.appendChild(li2);

    // Contagem: Verifica se começa com "A"
    if (nome.charAt(0).toUpperCase() === 'A') {
        contadorA++; 
    }

    // Regra 3: Adicionar à Lista 3 se possuir exatamente 5 letras
    if (nome.length === 5) {
        let li3 = document.createElement('li');
        li3.textContent = nome;
        ulLista3.appendChild(li3);
    }
}

// Atualiza o HTML com o total da contagem da letra "A" na segunda aba
spanContagem.textContent = contadorA;

// ==========================================
// LÓGICA DOS BOTÕES
// ==========================================
function exibirSecao(idSecao) {
    document.getElementById('secao-lista1').classList.add('oculta');
    document.getElementById('secao-lista2').classList.add('oculta');
    document.getElementById('secao-lista3').classList.add('oculta');
    
    document.getElementById(idSecao).classList.remove('oculta');
}

document.getElementById('btn-lista1').addEventListener('click', function() {
    exibirSecao('secao-lista1');
});

document.getElementById('btn-lista2').addEventListener('click', function() {
    exibirSecao('secao-lista2');
});

document.getElementById('btn-lista3').addEventListener('click', function() {
    exibirSecao('secao-lista3');
});
