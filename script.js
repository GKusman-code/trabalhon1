function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");

  mensagem.innerHTML = `
    <div style="text-align: center;">
      <img src="https://i.gifer.com/7efs.gif" alt="Foguete decolando" width="150">
    </div>
  `;

  // Rola suavemente até a mensagem
  mensagem.scrollIntoView({ behavior: 'smooth' });
}
