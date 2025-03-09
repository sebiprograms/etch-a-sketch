const game = document.querySelector("#game")
const announcement = document.querySelector("#announcement")
game.style.width = "288px"
game.style.height = "256px"
game.style.display = "flex"
game.style.flexWrap = "wrap"
let boxes = 256

// Sets aspect ratio to 16x16
function sixteen(){
  removeBetter()
  for (let i = 0; i < boxes; i++){
    const square = document.createElement("div")
    square.className = "square"
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
}
//returns display size 288px references 16x16 width and 576px for thirtytwo 
function whatRatio(){
  if (game.style.width == "288px"){
    return "sixteen"
  } else if (game.style.width == "576px"){
    return "thirtytwo"
  }
}

// its like the remove function but swag
function removeBetter(){
  while(game.lastElementChild){
    game.removeChild(game.lastElementChild)
  }
}

function thirtytwo(){
  removeBetter()
  boxes = 1024
  game.style.width = "576px"
  game.style.height = "256px"
  for (let i = 0; i < boxes; i++){
    const square = document.createElement("div")
    square.className = "square"
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
}

const button1 = document.createElement("button")
const button2 = document.createElement("button")
announcement.appendChild(button1)
announcement.appendChild(button2)

// Initial board
sixteen()