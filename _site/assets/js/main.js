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

});