// Três listas simples de convidados
const convidadosLista1 = ["Ana", "Carlos", "Amanda"];
const convidadosLista2 = ["Pedro", "Alberto", "Bia"];
const convidadosLista3 = ["Ricardo", "Fernanda", "João"];

// Função para popular as listas no HTML
function popularLista(array, idUl) {
    const ul = document.getElementById(idUl);
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.textContent = array[i]; // Sem formatação extra
        ul.appendChild(li);
    }
}

// Populando as 3 listas
popularLista(convidadosLista1, 'ul-lista1');
popularLista(convidadosLista2, 'ul-lista2');
popularLista(convidadosLista3, 'ul-lista3');

// Função para gerenciar a exibição
function exibirSecao(idSecao) {
    // Esconde todas as seções
    document.getElementById('secao-lista1').classList.add('oculta');
    document.getElementById('secao-lista2').classList.add('oculta');
    document.getElementById('secao-lista3').classList.add('oculta');

    // Remove a classe 'oculta' apenas da seção clicada
    document.getElementById(idSecao).classList.remove('oculta');
}

// Adicionando os eventos de clique aos botões
document.getElementById('btn-lista1').addEventListener('click', function() {
    exibirSecao('secao-lista1');
});

document.getElementById('btn-lista2').addEventListener('click', function() {
    exibirSecao('secao-lista2');
});

document.getElementById('btn-lista3').addEventListener('click', function() {
    exibirSecao('secao-lista3');
});
