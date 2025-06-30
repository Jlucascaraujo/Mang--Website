document.addEventListener('DOMContentLoaded', (event) => {
  const timeElement = document.getElementById('access-time');
  if (timeElement) {
    const accessTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    timeElement.textContent = accessTime.toLocaleDateString('pt-BR', options);
  }
});