// Criando três listas simples de convidados
const grupo1 = ["Ana", "Carlos", "Amanda"];
const grupo2 = ["Pedro", "Alberto", "Bia"];
const grupo3 = ["Ricardo", "Fernanda", "João"];

// Função genérica para preencher qualquer lista no HTML
function preencherLista(arrayDeNomes, idDoElementoUl) {
    const ul = document.getElementById(idDoElementoUl);
    for (let i = 0; i < arrayDeNomes.length; i++) {
        let li = document.createElement('li');
        li.textContent = arrayDeNomes[i];
        ul.appendChild(li);
    }
}

// Preenchendo as três listas usando a função acima
preencherLista(grupo1, 'ul-lista1');
preencherLista(grupo2, 'ul-lista2');
preencherLista(grupo3, 'ul-lista3');

// ==========================================
// LÓGICA DOS BOTÕES PARA MOSTRAR/ESCONDER
// ==========================================

function mostrarLista(idDaSecao) {
    // Esconde todas
    document.getElementById('secao-lista1').classList.add('oculta');
    document.getElementById('secao-lista2').classList.add('oculta');
    document.getElementById('secao-lista3').classList.add('oculta');

    // Mostra apenas a que foi clicada
    document.getElementById(idDaSecao).classList.remove('oculta');
}

// Conectando os botões à função
document.getElementById('btn-lista1').addEventListener('click', function() {
    mostrarLista('secao-lista1');
});

document.getElementById('btn-lista2').addEventListener('click', function() {
    mostrarLista('secao-lista2');
});

document.getElementById('btn-lista3').addEventListener('click', function() {
    mostrarLista('secao-lista3');
});
