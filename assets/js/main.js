document.addEventListener('DOMContentLoaded', (event) => {
  const timeElement = document.getElementById('access-time');
  if (timeElement) {
    const accessTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const dataCompleta = accessTime.toLocaleDateString('pt-BR', options);

    const partesDaData = dataCompleta.split(', ');

    timeElement.innerHTML = partesDaData[0] + '<br>' + partesDaData[1];
  }
});

document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('form');
  const fields = document.querySelectorAll('[required]');
  const spans = document.querySelectorAll('.spanRequired');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const nameInput = fields[0];

  function validateName() {
    if (fields[0].value.length < 5) {
      fields[0].style.border = '3px solid #e63636';
      spans[0].style.display = 'block';
      console.log('Nome deve ter mais que 5 caracteres.');
    }
    else {
      fields[0].style.border = '';
      spans[0].style.display = '';
      console.log('Nome válido.');
    }
  }

  if (fields[0]) {
    fields[0].addEventListener('input', validateName);
  }

  function validateEmail() {
    if (!emailRegex.test(fields[1].value)) {
      fields[1].style.border = '3px solid #e63636';
      spans[1].style.display = 'block';
      console.log('Digite um email válido');
    }
    else {
      fields[1].style.border = '';
      spans[1].style.display = 'none';
      console.log('Email válido.');
    }
  }

  if (fields[1]) {
    fields[1].addEventListener('input', validateEmail);
  }

  function validateSubject() {
    if (fields[2].value.length < 1) {
      fields[2].style.border = '3px solid #e63636';
      spans[2].style.display = 'block';
      console.log('Digite um assunto');
    }
    else {
      fields[2].style.border = '';
      spans[2].style.display = 'none';
      console.log('Assunto válido.');
    }
  }

  if (fields[2]) {
    fields[2].addEventListener('input', validateSubject);
  }

  var options = {
    strings: [
      "Estou me formando em Engenharia de Software e estudando programação pela Udemy, Dio.me e claro, YouTube. Procuro oportunidades de Estágio 100% remoto ou no Distrito Federal"
    ],
    typeSpeed: 5,
    contentType: 'html'
  };

  setTimeout(function () {
    var typed = new Typed('.textoStatusAtual', options);
  }, 500);

  const enunciado1 = document.getElementById("enunciado");
  enunciado.innerHTML = "Quem descobriu o Brasil?";

  let rodada = 0;
  let numPergunta = 0;
  const totalPerguntas = 17;

  const perguntas = [
    {
      enunciado: "Qual é o maior planeta do sistema solar?",
      alternativas: ["Júpiter", "Saturno", "Urano", "Netuno"],
      resposta: "Júpiter",
      dificuldade: "Fácil",
    },
    {
      enunciado: "Qual é o menor planeta do sistema solar?",
      alternativas: ["Mercúrio", "Vênus", "Marte", "Plutão"],
      resposta: "Mercúrio",
      dificuldade: "Difícil",
    }
  ];

  const alts = document.querySelectorAll(".alternativas .box");
  const btnPerguntar = document.getElementById("btnPerguntar");
  const btnParar = document.getElementById("btnParar");
  const enunciado2 = document.getElementById("enunciado2");
  const alternativa1 = document.querySelector(".alternativa1");
  const alternativa2 = document.querySelector(".alternativa2");
  const alternativa3 = document.querySelector(".alternativa3");
  const alternativa4 = document.querySelector(".alternativa4");
  const boxErrar = document.querySelector(".pontuacao .errar");
  const boxParar = document.querySelector(".pontuacao .parar");
  const boxAcertar = document.querySelector(".pontuacao .acertar");
  const mensagem = document.querySelector(".right");



  function exibePergunta(numero) {
    enunciado2.innerText = perguntas[numero].enunciado;

    [
      alternativa1.innerText,
      alternativa2.innerText,
      alternativa3.innerText,
      alternativa4.innerText,
    ] = perguntas[numero].alternativas;
  };

  if (localStorage.getItem("rodada") === null) {
    rodada = 0;
    localStorage.setItem("rodada", rodada);
  } else {
    rodada = localStorage.getItem("rodada");
  }

  const geraNumeroAleatorio = () => Math.floor(Math.random() * perguntas.length);

  if (localStorage.getItem("numPergunta") === null) {
    numPergunta = geraNumeroAleatorio();
    localStorage.setItem("numPergunta", numPergunta);
  } else {
    numPergunta = localStorage.getItem("numPergunta");
  }

  exibePergunta(geraNumeroAleatorio());

  const perguntasFaceis = perguntas.filter((i) => i.dificuldade === "Fácil");
  /*Criando uma nova array a partir da função filter que seleciona todos que alcançam um requerimento*/

  console.log(perguntasFaceis);

  alts.forEach((box) => {
    box.addEventListener("click", (event) => {
      document.querySelector(".selecionada")?.classList.remove("selecionada");
      event.target.classList.add("selecionada");
      btnPerguntar.disabled = false;
      mensagem.innerText = "";
    });

    btnParar.addEventListener("click", () => {
      delete localStorage.rodada;
      delete localStorage.numPergunta;
      mensagem.innerText = "Você parou o jogo!\nGanhou " + boxParar.innerHTML;
      rodada = 0;
      proximaPergunta();
    });

    btnPerguntar.addEventListener("click", () => {
      if (document.querySelector(".selecionada") === null) {
        mensagem.innerText = "Selecione uma alternativa!";
        return;
      }

      const resposta = perguntas[numPergunta].resposta;
      const alternativa = document.querySelector(".selecionada").innerText;

      if (resposta === alternativa) {
        mensagem.innerText = "Você acertou!\nGanhou " + boxAcertar.innerHTML;
        rodada++;
        localStorage.rodada = rodada;
      } else {
        mensagem.innerText = "Você errou!\nGanhou " + boxErrar.innerHTML;
        delete localStorage.rodada;
        rodada = 0;
      }

      proximaPergunta();
    });

    const proximaPergunta = () => {
      numPergunta = geraNumeroAleatorio();
      localStorage.numPergunta = numPergunta;
      exibePergunta(numPergunta);
    }


  });
});
