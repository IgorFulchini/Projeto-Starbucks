const circulo       = document.getElementById('circulo');
const copo          = document.getElementById('copo');
const textoDestaque = document.getElementById('texto-destaque');
const botoesMenu    = document.querySelectorAll('.botao-menu');

function trocarBebida(botaoClicado, cor, endereco) {
  // Atualiza cor do círculo e do texto destaque
  circulo.style.background  = cor;
  textoDestaque.style.color = cor;

  // Troca imagem com fade suave
  copo.style.opacity   = '0';
  copo.style.transform = 'scale(0.95)';
  setTimeout(() => {
    copo.src             = endereco;
    copo.style.opacity   = '1';
    copo.style.transform = 'scale(1)';
  }, 300);

  // Marca botão ativo
  botoesMenu.forEach(b => b.classList.remove('ativo'));
  botaoClicado.classList.add('ativo');
}