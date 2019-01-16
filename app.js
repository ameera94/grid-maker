document.addEventListener("DOMContentLoaded", function () {
  var board = document.getElementById("board");

  let rowCount = prompt("How many rows would you like?");
  let colCount = prompt("How many columns would you like?")

  function randomColor() {

    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }

  for (let i = 0; i < rowCount; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    board.appendChild(row);
    for (let j = 0; j < colCount; j++) {
      const col = document.createElement("div");
      col.setAttribute("class", "col");
      row.appendChild(col);
      col.addEventListener("mouseover", function (event) {
        event.target.style.background = randomColor();
      })
      col.addEventListener("click", function (event) {
        event.target.style.background = randomColor();
      })
    }
  }
});




