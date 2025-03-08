const game = document.querySelector("#game")
game.style.width = "288px"
game.style.height = "256px"
game.style.display = "flex"
game.style.flexWrap = "wrap"
let boxes = 256

for (let i = 0; i < boxes; i++){
  const square = document.createElement("div")
  square.style.border = "solid"
  square.style.borderWidth = ".1px"
  square.style.borderColor = "rgba(3, 3, 3, 0.3)"
  square.style.width = "16px"
  square.style.height = "16px"
  square.addEventListener("click", () => {
    if (square.style.backgroundColor == ""){
      square.style.backgroundColor = "black"
    } else {
      square.style.backgroundColor = ""
    }
  })
  game.appendChild(square)
}
const label = document.createElement("label")
const select = document.createElement("select")
const option = document.createElement("option")
option.textContent = "16 x 16"
label.textContent = "Aspect Ratio"

select.appendChild(option)
game.appendChild(label)

label.appendChild(select)