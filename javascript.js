// Selecting the container div - We'll create a 16x16 grid of divs inside of it
const container = document.querySelector(".container");

let divArray = [];

// Using a loop to create a 16x16 grid, inside the container div
for (let n = 0; n < 255; n++) {
    // We need to firstly create the divs
    const content = document.createElement("div");
    // giving each div their attribute
    content.style.width = "calc(100% / 16)";
    content.style.height = "calc(100% / 16)";
    content.style.border = "1px solid black";
    // We then need to place them inside of the relevant container div
    container.appendChild(content);
    // Place these into a grid via flexbox
    divArray.push(content);
}

container.style.display = "flex";
container.style.flexWrap = "wrap";

// setting up hover event, changes color of div when user hovers over the relevant div
// element.addEventListener("mouseover", myFunction);
// container.addEventListener("mouseover", () => {
//     // Change colour of div 
//     // modify below to change colour of current div
//     this.style.backgroundColor = 'green';
//     var divs = this.getElementsByTagName('div');
//     h2s[0].style.backgroundColor = 'blue';
// }) 
container.addEventListener("mouseover", (e) => {
    if (e.target !== container) {
        e.target.style.backgroundColor = 'green';
    }
});