const board = document.querySelector("#board");
const grid = document.createElement("div");
grid.style.border = "2px solid black";
grid.classList.add("grid");

board.appendChild(grid);

const gridSquare = document.createElement("div");
gridSquare.textContent = "test";
gridSquare.style.border = "0.5px solid black";
gridSquare.classList.add("grid-square");

for (let i = 0; i < 16; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  grid.appendChild(gridSquare);
}
