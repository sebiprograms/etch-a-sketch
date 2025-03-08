const game = document.querySelector("#game")
game.style.width = "252px"
game.style.height = "252px"
game.style.display = "flex"
game.style.flexWrap = "wrap"

for (let i = 0; i < 252; i++){
  const square = document.createElement("div")
  square.style.border = "solid"
  square.style.borderWidth = ".2px"
  square.style.borderColor = "grey"
  square.style.width = "16px"
  square.style.height = "16px"
  square.addEventListener("click", () => {
    if (square.style.backgroundColor == ""){
      square.style.backgroundColor = "black"
    } else {
      square.style.backgroundColor = "white"
    }
  })
  game.appendChild(square)
}