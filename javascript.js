const board = document.querySelector("#board");
const grid = document.createElement("div");
grid.classList.add("grid");

board.appendChild(grid);

const gridSquare = document.createElement("div");
gridSquare.textContent = "test";
gridSquare.style.border = "0.5px solid black";
gridSquare.classList.add("grid-square");

//Creating the grid squares based of the size demanded
function gridCreation(size) {
  let calc = 100 / size;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      grid.appendChild(gridSquare);
      gridSquare.style.flex = `1 0 calc(${calc}%)`;
    }
  }
}

gridCreation(4);
