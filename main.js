const form = document.getElementById('form');
const anoNasci = document.querySelector('#ano1');
const anoAssi = document.querySelector('#ano2');
const erroMsg = document.querySelector('.erro');
const certoMsg = document.querySelector('.certo');

function validaValor() {
  if (anoAssi.value <= anoNasci.value) {
    return false;
  }
  else {
    return true;
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validaValor()) {
    erroMsg.style.display = 'none';
    certoMsg.style.display = 'block';
  }
  else {
    erroMsg.style.display = 'block';
    certoMsg.style.display = 'none';
  }
})