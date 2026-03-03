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
        ul
