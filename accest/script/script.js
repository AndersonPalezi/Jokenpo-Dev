// Variáveis para rastrear a pontuação do jogador humano e do computador
let humanScoreNumber = 0;
let machineScoreNumber = 0;

// Função para atualizar a pontuação exibida na tela
const atualizarPontuacao = () => {
    // Atualiza os elementos HTML com as pontuações atuais
    document.getElementById("human-score").textContent = humanScoreNumber;
    document.getElementById("machine-score").textContent = machineScoreNumber;
};

// Função principal que é chamada quando o jogador clica no botão "JOGAR"
function jogar() {
    // Obtém o elemento de opção (botão de rádio) escolhido pelo jogador
    const escolhaJogadorElement = document.querySelector('input[name="grupo"]:checked');

    // Verifica se o jogador fez uma escolha
    if (!escolhaJogadorElement) {
        // Se nenhum botão de rádio estiver marcado, emite um alerta para selecionar uma opção
        alert("Selecione uma opção");
    } else {
        // Obtém o ID do botão de rádio escolhido pelo jogador
        const escolhaJogador = escolhaJogadorElement.id;

        // Gera um número aleatório entre 0 e 2 para representar a escolha aleatória do computador (pedra, papel ou tesoura)
        const sorteio = Math.floor(Math.random() * 3);

        // Altera a imagem do computador com base na escolha aleatória
        switch (sorteio) {
            case 0:
                document.getElementById("pc").src = "./accest/img/pcpedra.png";
                break;
            case 1:
                document.getElementById("pc").src = "./accest/img/pcpapel.png";
                break;
            case 2:
                document.getElementById("pc").src = "./accest/img/pctesoura.png";
                break;
        }

        // Obtém a referência ao elemento HTML com o ID "placar"
        const placarElement = document.getElementById("placar");

        // Verifica quem venceu ou se foi um empate, atualizando a pontuação e exibindo uma mensagem no placar
        if (
            (escolhaJogador === "pedra" && sorteio === 0) ||
            (escolhaJogador === "papel" && sorteio === 1) ||
            (escolhaJogador === "tesoura" && sorteio === 2)
        ) {
            placarElement.innerHTML = "Empate";
        } else if (
            (escolhaJogador === "pedra" && sorteio === 2) ||
            (escolhaJogador === "papel" && sorteio === 0) ||
            (escolhaJogador === "tesoura" && sorteio === 1)
        ) {
            // Se o jogador vencer, incrementa a pontuação do jogador, atualiza a pontuação e exibe a mensagem
            humanScoreNumber++;
            atualizarPontuacao();
            placarElement.innerHTML = "Jogador Venceu";
        } else {
            // Se o computador vencer, incrementa a pontuação do computador, atualiza a pontuação e exibe a mensagem
            machineScoreNumber++;
            atualizarPontuacao();
            placarElement.innerHTML = "Computador Venceu";
        }
    }
}
