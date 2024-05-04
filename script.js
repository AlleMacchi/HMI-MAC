document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector("#chessboard tbody");
    
    for (let i = 1; i <= 19; i++) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${i}</td>` + "<td></td>".repeat(19);
      tbody.appendChild(row);
    }


    // const rowIndex = 5; // Change this value to the desired row index
    // const colIndex = 5; // Change this value to the desired column index
  
    // Get the cell at the specified row and column index
    // const cell = document.querySelector(`#chessboard tbody tr:nth-child(${rowIndex}) td:nth-child(${colIndex + 1})`);
    
    // Apply red background color to the cell
    // cell.style.backgroundColor = "red";

    function highlightSquare(row, col) {
        const allCells = document.querySelectorAll(`#chessboard tbody tr td`);
        const firstColumn = document.querySelectorAll(`#chessboard tbody td:first-child`);
        const cell = document.querySelector(`#chessboard tbody tr:nth-child(${row}) td:nth-child(${col + 1})`);
        
        // Reset background color of all cells to white
        allCells.forEach(cell => {
            cell.style.backgroundColor = "white";
        });
        
        // Apply red background color to the specified cell
        cell.style.backgroundColor = "red";
        firstColumn.forEach(cell => {
            cell.style.backgroundColor = "#34abe7";
        });
        

        // Variables to track mouse movement
let isLook = false;
let isDragging = false;
let startX = 0;
let startY = 0;

// Get the specific div where you want to enable click-and-drag scrolling
const scrollableDiv = document.getElementById("container");

// Add mousedown event listener
scrollableDiv.addEventListener("mousedown", function(event) {
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
});

// Add mousemove event listener
scrollableDiv.addEventListener("mousemove", function(event) {
  if (isDragging) {
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    scrollableDiv.scrollLeft -= deltaX;
    scrollableDiv.scrollTop -= deltaY;
    startX = event.clientX;
    startY = event.clientY;
  }
});

// Add mouseup event listener
scrollableDiv.addEventListener("mouseup", function() {
  isDragging = false;
});

        const highlightedSquare = cell;
        const container = document.getElementById("container");
        const containerRect = container.getBoundingClientRect();
        const squareRect = cell.getBoundingClientRect();

        if (isLook) {
            if (squareRect.top < 0 || squareRect.bottom > containerRect.height) {
                container.scrollTo(0, highlightedSquare.offsetTop - containerRect.height / 2);
            }
            if (squareRect.left < 0 || squareRect.right > containerRect.width) {
                container.scrollTo(highlightedSquare.offsetLeft - containerRect.width / 2, 0);
            }  
        }

    }

    // Simulation of shuttle moving downwards
    let currentRow = 0;
    let currentCol = 0;

    function moveShuttleDown() {
        currentRow++;
        if (currentRow > 19) {
          currentRow = 1;
          window.scrollBy(0, 21); // Scroll by the height of one square
        }
        highlightSquare(currentRow, 1);
      }

      function moveShuttleRight() {
        currentCol++;
        if (currentCol > 19) {
          currentCol = 1;
          window.scrollBy(21, 0); // Scroll by the width of one square
         }
          highlightSquare(1, currentCol);
        }

        setInterval(moveShuttleRight, 500);



  

        // Add event listener to each cell
        tbody.querySelectorAll("td").forEach((cell, index) => {
        //   const rowIndex = Math.floor(index / 19) + 1; // Calculate row index
        //   const colIndex = (index % 19); // Calculate column index

            const rowIndex = Math.floor(index / 19) + 1; // Calculate row index
            const colIndex = index; // Calculate column index
      
          cell.addEventListener("click", () => {
            console.log(`Clicked cell at Row: ${rowIndex}, Column: ${colIndex}`);
          });
        });

  });
  