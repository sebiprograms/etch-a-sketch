const game = document.querySelector("#game")
game.style.width = "256px"
game.style.height = "256px"
game.style.display = "flex"
game.style.flexWrap = "wrap"

for (let i = 0; i < 256; i++){
  const square = document.createElement("div")
  square.style.border = "solid"
  square.style.borderWidth = ".2px"
  square.style.borderColor = "grey"
  square.style.width = "16px"
  square.style.height = "16px"
  game.appendChild(square)
}