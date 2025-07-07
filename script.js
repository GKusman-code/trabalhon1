function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");

  mensagem.innerHTML = `
    <p>Rumo ao espaço com a tecnologia!</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Emoji_u1f680.svg/120px-Emoji_u1f680.svg.png" 
         alt="Foguete decolando" 
         class="foguete">
  `;

  mensagem.scrollIntoView({ behavior: 'smooth' });
}
