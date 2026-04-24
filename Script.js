function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito de óculos escuros e jaqueta preta, sorrindo e com o fundo azul e roxo",
    )
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito de óculos e jaqueta preta, sorrindo e com o fundo azul e roxo",
    )
  }
}
