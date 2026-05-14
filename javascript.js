const board = document.querySelector("#board");
const grid = document.createElement("div");
grid.classList.add("grid");

board.appendChild(grid);

const gridSquare = document.createElement("div");
gridSquare.textContent = "test";
gridSquare.style.border = "0.5px solid black";
gridSquare.classList.add("grid-square");

//Creating the grid squares based of the size demanded

const randomColour = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r} ${g} ${b} /20%)`;
};
function gridCreation(size) {
  let calc = 100 / size;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");

      gridSquare.addEventListener("mouseover", () => {
        gridSquare.style.backgroundColor = randomColour();
        gridSquare.classList.add("colored");
      });
      grid.appendChild(gridSquare);
      gridSquare.style.flex = `1 0 calc(${calc}%)`;
    }
  }
}

function gridDeletion() {
  grid.replaceChildren();
}
function gridClear(size) {
  gridDeletion();
  gridCreation(4);
}

let btnSize = document.querySelector("#size");
let btnReset = document.querySelector("#erase");
//Default grid
gridCreation(4);

//When the user presses the "Change board size button" a new board size is created
btnSize.addEventListener("click", () => {
  let grid = prompt("Enter size of board");
  let size = grid;
  console.log(size);
  gridDeletion();
  gridCreation(size);
});
btnReset.addEventListener("click", () => {
  console.log("deleted");
  gridClear();
});
