// Nossa lista principal
const convidados = ["Ricardo", "Ana", "Carlos", "Amanda", "Pedro", "Aline", "Bia", "Lucas", "Tiago"].sort();


// ==========================================
// FUNCIONALIDADE 1: LISTA EM MAIÚSCULAS
// ==========================================
function gerarListaMaiusculas() {
    const ulLista1 = document.getElementById('ul-lista1');
    
    for (let i = 0; i < convidados.length; i++) {
        let li = document.createElement('li');
        li.textContent = convidados[i].toUpperCase();
        ulLista1.appendChild(li);
    }
}


// ==========================================
// FUNCIONALIDADE 2: TODOS OS NOMES E CONTAGEM DE "A"
// ==========================================
function gerarListaTodos() {
    const ulLista2 = document.getElementById('ul-lista2');
    const spanContagem = document.getElementById('contagem-a');
    let contadorA = 0;

    for (let i = 0; i < convidados.length; i++) {
        let nome = convidados[i];
        
        // Adiciona o nome na lista
        let li = document.createElement('li');
        li.textContent = nome;
        ulLista2.appendChild(li);

        // Verifica se começa com "A"
        if (nome.charAt(0).toUpperCase() === 'A') {
            contadorA++; 
        }
    }
    
    // Atualiza o número na tela
    spanContagem.textContent = contadorA;
}


// ==========================================
// FUNCIONALIDADE 3: APENAS NOMES COM 5 LETRAS
// ==========================================
function gerarLista5Letras() {
    const ulLista3 = document.getElementById('ul-lista3');

    for (let i = 0; i < convidados.length; i++) {
        let nome = convidados[i];

        if (nome.length === 5) {
            let li = document.createElement('li');
            li.textContent = nome;
            ulLista3.appendChild(li);
        }
    }
}


// ==========================================
// FUNCIONALIDADE 4: GERENCIAR ABAS E BOTÕES
// ==========================================
function exibirSecao(idSecao, idBotaoClicado) {
    // Esconde todas as listas
    document.getElementById('secao-lista1').classList.add('oculta');
    document.getElementById('secao-lista2').classList.add('oculta');
    document.getElementById('secao-lista3').classList.add('oculta');
    
    // Tira a cor de seleção de todos os botões
    document.getElementById('btn-lista1').classList.remove('ativo');
    document.getElementById('btn-lista2').classList.remove('ativo');
    document.getElementById('btn-lista3').classList.remove('ativo');

    // Mostra a lista certa e pinta o botão clicado
    document.getElementById(idSecao).classList.remove('oculta');
    document.getElementById(idBotaoClicado).classList.add('ativo');
}


// ==========================================
// INICIALIZAÇÃO DO SITE
// ==========================================
// Aqui nós "chamamos" as funções para elas rodarem quando a página carregar
gerarListaMaiusculas();
gerarListaTodos();
gerarLista5Letras();

// Adicionando os eventos de clique nos botões
document.getElementById('btn-lista1').addEventListener('click', function() {
    exibirSecao('secao-lista1', 'btn-lista1');
});

document.getElementById('btn-lista2').addEventListener('click', function() {
    exibirSecao('secao-lista2', 'btn-lista2');
});

document.getElementById('btn-lista3').addEventListener('click', function() {
    exibirSecao('secao-lista3', 'btn-lista3');
});
