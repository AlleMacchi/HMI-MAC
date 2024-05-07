export class MapActualPosition {
    constructor(tableId, containerId) {
        this.tableId = tableId;
        this.container = containerId;
        this.isLook = true;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.RowSelected = 0;
        this.ColSelected = 0;

        this.initPromise = new Promise((resolve) => {
            document.addEventListener("DOMContentLoaded", () => {
                this.initializeChessboard();
                resolve(); 
            });
        });
    }

    // =================================================================================
    //          INIT - GENERATION BOARD LIK CHESSBOARD
    // =================================================================================
    
    async initializeChessboard() {
        const tbody = document.querySelector(`#${this.tableId} tbody`);
        for (let i = 1; i <= 38; i++) {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${i}</td>` + "<td></td>".repeat(38);
            tbody.appendChild(row);
        }

            // COPY POSITION ROW AND CLOUMN FROM CHESSBOARD
            tbody.querySelectorAll("td").forEach((cell, index) => {
                
                    cell.addEventListener("click", () => {
                        if (!this.isLook) {
                        const rowIndex = Math.floor(index / 39) + 1;
                        const colIndex = index - ((rowIndex - 1) * 39);
                        console.log(`Clicked cell at Row: ${rowIndex}, Column: ${colIndex}`);

                        const txtRow = document.getElementById('row');
                        const txtCol = document.getElementById('col');
                        txtRow.innerHTML = rowIndex;
                        txtCol.innerHTML = colIndex;

                        const cell = document.querySelector(`#${this.tableId}  tbody tr:nth-child(${rowIndex}) td:nth-child(${colIndex + 1})`);
                        const allCells = document.querySelectorAll(`#${this.tableId}  tbody tr td`);

                        allCells.forEach(cell => {
                            cell.style.border = "1px solid rgba(255,255,255,0.1)"
                            });
                        if ((this.RowSelected !== rowIndex) || (this.ColSelected !== colIndex)) {
                            cell.style.border = "2px solid yellow";
                            this.RowSelected = rowIndex;
                            this.ColSelected = colIndex; 
                        }else if ((this.RowSelected == rowIndex) && (this.ColSelected == colIndex)){
                            this.RowSelected = 0;
                            this.ColSelected = 0; 
                            txtRow.innerHTML = '';
                            txtCol.innerHTML = '';
                        }
                    }
                    });
            });
        

    // =================================================================================
    //          MANAGEMENT KEEP MOUSE BUTTON DOWN TO MOVE THE SCROLLS
    // =================================================================================
        // Get the specific div where you want to enable click-and-drag scrolling
        const scrollableDiv = document.getElementById(this.container);

        // Add mousedown event listener
        scrollableDiv.addEventListener("mousedown", (event) => {
            if (!this.isLook) {
                this.isDragging = true;
                this.startX = event.clientX;
                this.startY = event.clientY;
            }
        });

        // Add mousemove event listener
        scrollableDiv.addEventListener("mousemove", (event) => {
            if (this.isDragging) {
                const deltaX = event.clientX - this.startX;
                const deltaY = event.clientY - this.startY;
                scrollableDiv.scrollLeft -= deltaX;
                scrollableDiv.scrollTop -= deltaY;
                this.startX = event.clientX;
                this.startY = event.clientY;
            }
        });

        // Add mouseup event listener
        scrollableDiv.addEventListener("mouseup", () => {
            this.isDragging = false;
        });
    }

    // =================================================================================
    //          MANAGEMENT THE ANIMATION / VISUALIZATION OF SHUTTLES
    // =================================================================================
    highlightSquare(row, col, rowMother, colMother) {
        const allCells = document.querySelectorAll(`#${this.tableId}  tbody tr td`);
        const firstColumn = document.querySelectorAll(`#${this.tableId}  tbody td:first-child`);
        const cell = document.querySelector(`#${this.tableId}  tbody tr:nth-child(${row}) td:nth-child(${col + 1})`);
        const cellMother = document.querySelector(`#${this.tableId} tbody tr:nth-child(${rowMother}) td:nth-child(${colMother + 1})`);
        const cellRowActive = document.querySelectorAll(`#${this.tableId} tbody tr:nth-child(${row}) td`);
        const cellMotherColumn = document.querySelectorAll(`#${this.tableId} tbody td:nth-child(${colMother + 1})`);

        // Reset background of all cells to white
        allCells.forEach(cell => {
            cell.style.backgroundImage = "none";
                cell.style.backgroundColor = "rgb(59,62,79)";
            });

        // Only Baby
        cell.style.backgroundImage = "url('src/06.ui/assets/img/BabySmall.png')";
        cell.style.backgroundSize = "contain"; 
        cell.style.backgroundRepeat = "no-repeat"; 
        cell.style.backgroundPosition = "center";

        // Only Mother
        cellMother.style.backgroundImage = "url('src/06.ui/assets/img/MotherSmall.png')";
        cellMother.style.backgroundSize = "contain"; 
        cellMother.style.backgroundRepeat = "no-repeat"; 
        cellMother.style.backgroundPosition = "center";

        // Mother and Baby together
        if (row == rowMother && col == colMother) {
            cellMother.style.backgroundImage = "url('src/06.ui/assets/img/MotherAndBabySmall.png')";
            cellMother.style.backgroundSize = "contain"; 
            cellMother.style.backgroundRepeat = "no-repeat"; 
            cellMother.style.backgroundPosition = "center";
        }

        firstColumn.forEach(cell => {
            cell.style.backgroundColor = "rgb(48,50,60)";
        })

        cellRowActive.forEach(cell=>{
            cell.style.backgroundColor = "rgba(255,222,0,0.3)";
        })

        cellMotherColumn.forEach(cell=>{
            cell.style.backgroundColor = "rgba(166,248,255,0.3)";
        }) 


        // ENABLE/DISABLE SCROLL 
        if (this.isLook) {
            this.disableScroll();
        } else {
            this.enableScroll();
        }

        // ANIMATION SHUTTLES
        const highlightedSquare = cell;
        const container = document.getElementById(this.container);
        const containerRect = container.getBoundingClientRect();
        const squareRect = cell.getBoundingClientRect();

        if (this.isLook) {
            if (squareRect.top < 0 || squareRect.bottom > containerRect.height) {
                const offsetY = highlightedSquare.offsetTop - containerRect.height / 2;
                container.scrollTo({ top: offsetY, behavior: 'smooth' });
            }
            if (squareRect.left < 0 || squareRect.right > containerRect.width) {
                const offsetX = highlightedSquare.offsetLeft - containerRect.width / 2;
                container.scrollTo({ left: offsetX, behavior: 'smooth' });
            }  
        }
                  
    }
    // =================================================================================
    //          UPDATE POSITION
    // =================================================================================
    async update(row = 1, col = 1, rowMother = 1, colMother = 1 ) {     
        await this.initPromise;
        this.highlightSquare(row, col , rowMother, colMother);
    }

    // =================================================================================
    //          ENABLE/DISABLE AUTO SCROLL
    // =================================================================================
    enableAutoScroll() {
        this.isLook = true;
    }

    disableAutoScroll() {
        this.isLook = false;
    }

    // =================================================================================
    //          ENABLE/DISABLE SCROLL
    // =================================================================================
    disableScroll() {
        const container = document.getElementById(this.container);
        if (container) {
            container.style.overflow = 'hidden';
        } else {
            console.error("Container element not found.");
        }
    }

    enableScroll() {
        const container = document.getElementById(this.container);
        if (container) {
            container.style.overflow = 'scroll';
        } else {
            console.error("Container element not found.");
        }
    }

}
