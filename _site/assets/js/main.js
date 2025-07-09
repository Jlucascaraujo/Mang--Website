document.addEventListener('DOMContentLoaded', function () {
  function setAccessTime() {
    const timeElement = document.getElementById('access-time');
    if (timeElement) {
      const accessTime = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dataCompleta = accessTime.toLocaleDateString('pt-BR', options);
      const partesDaData = dataCompleta.split(', ');
      timeElement.innerHTML = `${partesDaData[0]}<br>${partesDaData[1]}`;
    }
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

  setAccessTime();

  document.body.addEventListener('click', (ev) => {
    // Find the title bar that was clicked
    const expandableTitle = ev.target.closest('.expandable__title-bar');
    if (!expandableTitle) {
      return;
    }

    // Find the parent expandable container and toggle the class
    const expandable = expandableTitle.closest('.expandable');
    if (expandable) {
      expandable.classList.toggle('expandable__open');
    }
  });
});