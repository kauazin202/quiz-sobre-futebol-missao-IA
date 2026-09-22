const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaInicial = document.querySelector(".caixa-inicial");
const btnIniciar = document.querySelector(".btn-iniciar");
const btnReiniciar = document.querySelector(".btn-reiniciar");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual seleção venceu a Copa do Mundo de 2002, conquistando o penta?",
        alternativas: ["Brasil", "Alemanha", "França", "Argentina"],
        respostaCorreta: "Brasil"
    },
    {
        enunciado: "Quantos jogadores cada equipe pode manter em campo no início da partida?",
        alternativas: ["10 jogadores", "11 jogadores", "12 jogadores", "9 jogadores"],
        respostaCorreta: "11 jogadores"
    },
    {
        enunciado: "Qual jogador conquistou o maior número de Bolas de Ouro da história?",
        alternativas: ["Cristiano Ronaldo", "Pelé", "Lionel Messi", "Neymar Jr"],
        respostaCorreta: "Lionel Messi"
    },
    {
        enunciado: "Qual clube é conhecido mundialmente como o 'Rei de Copas' da UEFA Champions League?",
        alternativas: ["Barcelona", "Real Madrid", "Milan", "Bayern de Munique"],
        respostaCorreta: "Real Madrid"
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0;

btnIniciar.addEventListener("click", iniciarQuiz);
btnReiniciar.addEventListener("click", reiniciarQuiz);

function iniciarQuiz() {
    caixaInicial.style.display = "none";
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    if (opcaoSelecionada === perguntaAtual.respostaCorreta) {
        pontuacao++;
    }
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
    textoResultado.textContent = `Fim do Quiz! Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
}

function reiniciarQuiz() {
    atual = 0;
    pontuacao = 0;
    caixaResultado.style.display = "none";
    mostraPergunta();
}