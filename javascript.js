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
        // Randomizes the backgroundColor that's appended to target
        let red = Math.floor(Math.random()* 255);
        let green = Math.floor(Math.random()* 255);
        let blue = Math.floor(Math.random()* 255);
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        // Get current opacity or default to 0.1 if not set
        let currentOpacity = parseFloat(e.target.style.opacity) || 0.1;
        // Increment opacity by 0.1 (10%) and cap it at 1 (100%, so full rgb colour)
        let newOpacity = Math.min(currentOpacity + 0.1, 1);
        // Set the new opacity
        e.target.style.opacity = newOpacity;    }
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
});