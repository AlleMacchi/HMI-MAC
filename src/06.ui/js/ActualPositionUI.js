export function ActualPositionUI(){

document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector("#chessboard tbody");
    
    for (let i = 1; i <= 38; i++) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${i}</td>` + "<td></td>".repeat(38);
      tbody.appendChild(row);
    }


    function highlightSquare(row, col, rowMother, colMother) {
        const allCells = document.querySelectorAll(`#chessboard tbody tr td`);
        const firstColumn = document.querySelectorAll(`#chessboard tbody td:first-child`);
        const cell = document.querySelector(`#chessboard tbody tr:nth-child(${row}) td:nth-child(${col + 1})`);
        const cellMother = document.querySelector(`#chessboard tbody tr:nth-child(${rowMother}) td:nth-child(${colMother + 1})`);
        
        // Reset background color of all cells to white
        allCells.forEach(cell => {
          cell.style.backgroundImage = "none";
            cell.style.backgroundColor = "rgb(48,50,60)";
        });
        
        // Apply red background color to the specified cell
        // cell.style.backgroundColor = "red";
        cell.style.backgroundImage = "url('src/06.ui/assets/img/BabySmall.png')";
        cell.style.backgroundSize = "contain"; // Adjust as needed
        cell.style.backgroundRepeat = "no-repeat"; // Adjust as needed
        cell.style.backgroundPosition = "center";

        
        cellMother.style.backgroundImage = "url('src/06.ui/assets/img/MotherSmall.png')";
        cellMother.style.backgroundSize = "contain"; // Adjust as needed
        cellMother.style.backgroundRepeat = "no-repeat"; // Adjust as needed
        cellMother.style.backgroundPosition = "center";

        if (row == rowMother && col == colMother) {
          cellMother.style.backgroundImage = "url('src/06.ui/assets/img/MotherAndBabySmall.png')";
          cellMother.style.backgroundSize = "contain"; // Adjust as needed
          cellMother.style.backgroundRepeat = "no-repeat"; // Adjust as needed
          cellMother.style.backgroundPosition = "center";
        }

        firstColumn.forEach(cell => {
            cell.style.backgroundColor = "rgb(48,50,60)";
        });
        

        // Variables to track mouse movement

        // Disable scrolling
function disableScroll() {
  var body = document.getElementById("actual-position");

  // Disable scrolling by setting overflow to hidden
  body.style.overflow = 'hidden';
}

// Enable scrolling
function enableScroll() {
  var body = document.getElementById("actual-position");

  // Disable scrolling by setting overflow to hidden
  body.style.overflow = 'scroll';
}


let isLook = true;
let isDragging = false;
let startX = 0;
let startY = 0;


if (isLook) {
  disableScroll();
} else {
  enableScroll();
}
// Get the specific div where you want to enable click-and-drag scrolling
const scrollableDiv = document.getElementById("actual-position");

// Add mousedown event listener
scrollableDiv.addEventListener("mousedown", function(event) {
  if (!isLook) {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
}

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
        const container = document.getElementById("actual-position");
        const containerRect = container.getBoundingClientRect();
        const squareRect = cell.getBoundingClientRect();

        if (isLook) {
            if (squareRect.top < 0 || squareRect.bottom > containerRect.height) {
                // container.scrollTo(0, highlightedSquare.offsetTop - containerRect.height / 2);
                const offsetY = highlightedSquare.offsetTop - containerRect.height / 2;
                container.scrollTo({ top: offsetY, behavior: 'smooth' });
            }
            if (squareRect.left < 0 || squareRect.right > containerRect.width) {
                // container.scrollTo(highlightedSquare.offsetLeft - containerRect.width / 2, 0);
                const offsetX = highlightedSquare.offsetLeft - containerRect.width / 2;
                container.scrollTo({ left: offsetX, behavior: 'smooth' });
            }  
        }

    }

    // Simulation of shuttle moving downwards
    let currentRow = 0;
    let currentCol = 0;

    function moveShuttleDown() {
         currentRow++;
        if (currentRow > 38) {
          currentRow = 1;
        }
        highlightSquare(currentRow, 1, 1, 20);
      }

      function moveShuttleRight() {
           currentCol++;
          if (currentCol > 20) {
            currentCol = 1;
          }
          highlightSquare(1, currentCol,  1, 20);
        }

        setInterval(moveShuttleRight, 500);



  

        // Add event listener to each cell
        tbody.querySelectorAll("td").forEach((cell, index) => {

            const rowIndex = Math.floor(index / 20) + 1; // Calculate row index
            const colIndex = index - ((rowIndex -1)*20); // Calculate column index
      
          cell.addEventListener("click", () => {
            console.log(`Clicked cell at Row: ${rowIndex}, Column: ${colIndex}`);
          });
        });

  });

};
  