const circulo       = document.getElementById('circulo');
const copo          = document.getElementById('copo');
const textoDestaque = document.getElementById('texto-destaque');
const botoesMenu    = document.querySelectorAll('.botao-menu');

function trocarBebida(botaoClicado, cor, endereco) {

  circulo.style.background  = cor;
  textoDestaque.style.color = cor;


  copo.style.opacity   = '0';
  copo.style.transform = 'scale(0.95)';
  setTimeout(() => {
    copo.src             = endereco;
    copo.style.opacity   = '1';
    copo.style.transform = 'scale(1)';
  }, 300);

 
  botoesMenu.forEach(b => b.classList.remove('ativo'));
  botaoClicado.classList.add('ativo');
}
