// Nossa lista original de convidados
const convidados = ["Ana", "Carlos", "Amanda", "Pedro", "Alberto", "Bia", "Ricardo"];

// ==========================================
// PARTE 1: GERANDO AS LISTAS COM LOOPS
// ==========================================

// Lista 1: Tudo em maiúsculo
const ulLista1 = document.getElementById('ul-lista1');
for (let i = 0; i < convidados.length; i++) {
    let li = document.createElement('li');
    li.textContent = convidados[i].toUpperCase();
    ulLista1.appendChild(li);
}

// Lista 2: Começam com "A" e contagem
const ulLista2 = document.getElementById('ul-lista2');
let contagemA = 0;
for (let i = 0; i < convidados.length; i++) {
    if (convidados[i].charAt(0).toUpperCase() === 'A') {
        contagemA++;
        let li = document.createElement('li');
        li.textContent = convidados[i];
        ulLista2.appendChild(li);
    }
}
// Atualiza o texto com o total
document.getElementById('total-a').textContent = contagemA;

// Lista 3: Mais de 5 letras
const ulLista3 = document.getElementById('ul-lista3');
for (let i = 0; i < convidados.length; i++) {
    if (convidados[i].length > 5) {
        let li = document.createElement('li');
        li.textContent = convidados[i];
        ulLista3.appendChild(li);
    }
}


// ==========================================
// PARTE 2: LÓGICA DOS BOTÕES
// ==========================================

// Função que esconde todas as listas e mostra apenas a selecionada
function mostrarLista(idDaSecao) {
    // 1. Esconde todas as seções adicionando a classe 'oculta'
    document.getElementById('secao-lista1').classList.add('oculta');
    document.getElementById('secao-lista2').classList.add('oculta');
    document.getElementById('secao-lista3').classList.add('oculta');

    // 2. Mostra a seção desejada removendo a classe 'oculta'
    document.getElementById(idDaSecao).classList.remove('oculta');
}

// Configurando os botões para "ouvirem" os cliques e chamarem a função
document.getElementById('btn-lista1').addEventListener('click', function() {
    mostrarLista('secao-lista1');
});

document.getElementById('btn-lista2').addEventListener('click', function() {
    mostrarLista('secao-lista2');
});

document.getElementById('btn-lista3').addEventListener('click', function() {
    mostrarLista('secao-lista3');
});
