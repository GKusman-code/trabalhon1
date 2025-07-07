function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");

  mensagem.innerHTML = `
    <p>Rumo ao espaço com a tecnologia!</p>
    <img src="imagem foguete/imagem foguete.png" alt="Foguete" class="foguete">
  `;

  mensagem.scrollIntoView({ behavior: 'smooth' });
}