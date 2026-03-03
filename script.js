// Definindo as variáveis iniciais (equivalente ao Python)
const l1 = ["Amanda", "Bruno", "Alberto", "Carolina", "Lia", "Ricardo"];
const l2 = [];
const l3 = [];
let cont_a = 0;

// Processando os dados (equivalente ao primeiro loop do Python)
for (let i = 0; i < l1.length; i++) {
    let nome = l1[i];
    let nomeMaiusculo = nome.toUpperCase();
    
    // Adiciona o nome em maiúsculo na lista 3
    l3.push(nomeMaiusculo);
    
    // Conta se começa com 'A'
    if (nomeMaiusculo.startsWith("A")) {
        cont_a++;
    }
    
    // Adiciona nomes com mais de 5 letras na lista 2
    if (nome.length > 5) {
        l2.push(nome);
    }
}

// Guardamos o que vai aparecer em cada tela aqui (equivalente à variável telas no Python)
// O array usa crases (`) para permitir a formatação das variáveis facilmente
const telas = [
    `Total com 'A': <strong>${cont_a}</strong>`,
    `Lista 1 (Originais):<br> [ ${l1.join(", ")} ]`,
    `Lista 2 (> 5 letras):<br> [ ${l2.join(", ")} ]`,
    `Lista 3 (Maiúsculas):<br> [ ${l3.join(", ")} ]`
];

let telaAtual = 0;

// Função chamada sempre que o botão é clicado (substitui o input("[ENTER]"))
function avancarTela() {
    const display = document.getElementById("display");
    const titulo = document.getElementById("titulo-tela");
    const botao = document.getElementById("btn-avancar");

    if (telaAtual < telas.length) {
        // Atualiza o HTML com a tela atual
        titulo.innerText = `--- TELA ${telaAtual + 2} ---`; // +2 porque seu script original começava a contar da tela 2
        display.innerHTML = telas[telaAtual];
        telaAtual++;
    } else {
        // Quando acabar as listas
        titulo.innerText = "--- FIM ---";
        display.innerHTML = "Todas as listas foram exibidas.";
        botao.innerText = "Finalizado";
        botao.disabled = true; // Desabilita o botão
    }
}
