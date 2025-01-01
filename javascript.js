const container = document.querySelector(".container");

// This function creates the grid within container div
function createGrid(size) {
    // Clears the container on button press
    container.innerHTML = "";

    // Calculates the dimensions of each cell
    const cellSize = 100 / size;

    // Create grid cells
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;
        cell.style.border = "1px solid black";
        container.appendChild(cell);
    }
}

// Initialize with a 16x16 grid
createGrid(16);

// Event listener for hover effect
container.addEventListener("mouseover", (e) => {
    if (e.target !== container) {
        e.target.style.backgroundColor = "yellow";
    }
});

// Reset button functionality
const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", () => {
    // Clears the container on button press
    container.innerHTML = "";

    // Prompt for grid size (input/invalid entry handling to be entered )
    // Alert prompts user to enter value
    let newGrid = prompt('Please enter a new grid size:'); 
    // creates new grid based on above user feedback
    for (let i = 0; i< newGrid * newGrid; i++) {

        // Calculates the dimensions of each cell
        const cellSize = 100 / newGrid;
        const cell = document.createElement("div");
        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;
        cell.style.border = "1px solid black";
        container.appendChild(cell);
    }

    // remove below if needed
    // let gridSize = 16; // Default to 16x16
    createGrid(gridSize);
});
