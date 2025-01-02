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

    // Prompt for grid size (input/invalid entry handling to be entered)
    // Alert prompts user to enter value - We could also do this via an input field which would be more realistic on a live page
    let newGrid = prompt('Please enter a new grid size (10-100):'); 

    // Event/error handling
    // creates new grid based on above user feedback, as long as it's between 10:100
    if (newGrid >= 10 && newGrid <= 100) {
        for (let i = 0; i< newGrid * newGrid; i++) {

            // Calculates the dimensions of each cell
            // we could tweak the dimensions based on number added
            const cellSize = 75 / newGrid;
            const cell = document.createElement("div");
            cell.style.width = `${cellSize}%`;
            cell.style.height = `${cellSize}%`;
            cell.style.border = "1px solid black";
            container.appendChild(cell);
        }
    } else {
        alert('Please enter a value between 10 and 100'); 
    }


    // remove below if needed
    // let gridSize = 16; // Default to 16x16
    createGrid(gridSize);
});
