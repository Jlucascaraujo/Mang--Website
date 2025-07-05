document.addEventListener('DOMContentLoaded', (event) => {
  const timeElement = document.getElementById('access-time');
  if (timeElement) {
    const accessTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    timeElement.textContent = accessTime.toLocaleDateString('pt-BR', options);
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

  let rodada = 0;
  const totalPerguntas = 17;

  const enunciado = document.getElementById("enunciado");
  enunciado.innerHTML = "Quem descobriu o Brasil?";

  const frutas = ["banana", "limão", "pera", "jaca"];
  console.log(frutas[2]);

  const supermanID = {
    pergunta: "Qual o nome de batismo do Superman?",
    alternativas: ["Bruce Wayne", "Wally West", "Clark Kent", "Speedy Gonzales"],
    resposta: "Clark Kent"
  }

  const novaPergunta = {};

  novaPergunta.pergunta = "Quantos números diferentes podem ser repredentados em um bit?";
  novaPergunta["resposta"] = 2;

});

