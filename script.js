const result = document.getElementById("result");
const inputQuestion = document.getElementById("inputQuestion");

let atendimentoIniciado = false;
let respostaEsperada = false;
let totalCompra = 0;
let planosSelecionados = [];

// Função que envia a mensagem do usuário
function sendMessage() {
  const message = inputQuestion.value.trim();
  if (message !== "") {
    displayUserMessage(message);
    if (!atendimentoIniciado) {
      initiateChat(message);
    } else {
      respondToUser(message.toLowerCase());
    }
    inputQuestion.value = "";
  }
}

// Função para exibir a mensagem do usuário
function displayUserMessage(message) {
  result.innerHTML += `<div class="message user">Você: ${message}</div>`;
  result.scrollTop = result.scrollHeight;
}

// Função para exibir a mensagem do bot
function displayBotMessage(message) {
  result.innerHTML += `<div class="message bot">Sara: ${message}</div>`;
  result.scrollTop = result.scrollHeight;
}

// Inicia o atendimento
function initiateChat(message) {
  if (message === "1") {
    displayBotMessage(
      "Escolha um serviço: \n1 - Desenvolvimento de Software\n2 - Consultoria\n3 - Teste de Software\nDigite o número correspondente."
    );
    atendimentoIniciado = true;
    respostaEsperada = true;
  } else if (message === "0") {
    displayBotMessage("Obrigado pela atenção! Volte sempre.");
  } else {
    displayBotMessage("Escolha 1 para iniciar o atendimento ou 0 para sair.");
  }
}

// Responde de acordo com as escolhas do usuário
function respondToUser(message) {
  if (respostaEsperada) {
    switch (message) {
      case "1":
        displayBotMessage(
          "Serviço de Desenvolvimento selecionado.\nEscolha o plano:\n4 - START (R$ 500)\n5 - MEGA (R$ 1000)\n6 - ULTRA (R$ 1500)\nDigite o número correspondente."
        );
        respostaEsperada = true;
        break;
      case "2":
        displayBotMessage(
          "Serviço de Consultoria selecionado.\nEscolha o plano:\n4 - START (R$ 500)\n5 - MEGA (R$ 1000)\n6 - ULTRA (R$ 1500)\nDigite o número correspondente."
        );
        respostaEsperada = true;
        break;
      case "3":
        displayBotMessage(
          "Serviço de Teste de Software selecionado.\nEscolha o plano:\n4 - START (R$ 500)\n5 - MEGA (R$ 1000)\n6 - ULTRA (R$ 1500)\nDigite o número correspondente."
        );
        respostaEsperada = true;
        break;
      case "4":
        adicionarPlano("START", 500);
        break;
      case "5":
        adicionarPlano("MEGA", 1000);
        break;
      case "6":
        adicionarPlano("ULTRA", 1500);
        break;
      case "7":
        encerrarCompra();
        break;
      default:
        displayBotMessage(
          "Escolha uma das opções válidas ou pressione 7 para encerrar."
        );
        break;
    }
  }
}

// Adiciona o plano ao carrinho
function adicionarPlano(nomePlano, valorPlano) {
  totalCompra += valorPlano;
  planosSelecionados.push(nomePlano);
  displayBotMessage(`${nomePlano} adicionado ao carrinho.`);
  // Adiciona a mensagem após cada escolha de plano
  displayBotMessage("Pressione 7 para finalizar ou escolha outro plano.");
}

// Encerra a compra e exibe o resumo
function encerrarCompra() {
  if (planosSelecionados.length === 0) {
    displayBotMessage("Nenhum plano selecionado. Obrigado!");
  } else {
    let message = "Planos escolhidos:\n";
    planosSelecionados.forEach((plano, index) => {
      message += `${index + 1} - ${plano}\n`;
    });
    message += `Total: R$ ${totalCompra}. Digite 0 para encerrar.`;
    displayBotMessage(message);
  }
  atendimentoIniciado = false;
  respostaEsperada = false;
}
