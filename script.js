// A nossa lista principal (desordenada de propósito para testar)
const convidados = ["Ricardo", "Ana", "Carlos", "Amanda", "Pedro", "Aline", "Bia", "Lucas", "Tiago"];

// Capturando os elementos HTML
const ulLista1 = document.getElementById('ul-lista1');
const ulLista2 = document.getElementById('ul-lista2');
const ulLista3 = document.getElementById('ul-lista3');
const spanContagem = document.getElementById('contagem-a');

let contadorA = 0;

// ==========================================
// LÓGICA DAS LISTAS 1 e 3 + CONTAGEM DE "A"
// ==========================================
for (let i = 0; i < convidados.length; i++) {
    let nome = convidados[i];

    // Regra 1: Imprimir na Lista 1 em MAIÚSCULAS
    let li1 = document.createElement('li');
    li1.textContent = nome.toUpperCase();
    ulLista1.appendChild(li1);

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

// Atualiza o HTML com o total da contagem da letra "A"
spanContagem.textContent = contadorA;

// ==========================================
// LÓGICA DA LISTA 2 (ORDEM ALFABÉTICA A-Z)
// ==========================================
// Cria uma cópia da lista e usa o sort() para organizar de A a Z
const convidadosAZ = [...convidados].sort();

for (let i = 0; i < convidadosAZ.length; i++) {
    let li2 = document.createElement('li');
    li2.textContent = convidadosAZ[i];
    ulLista2.appendChild(li2);
}

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
