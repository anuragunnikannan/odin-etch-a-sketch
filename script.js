let mode = "normal";

function changeMode(e) {
    mode = e.id;
}

function changeColour(e) {
    if (mode === "normal") {
        let colour = document.querySelector("#colourpicker").value;
        e.target.style.backgroundColor = colour;
    }
    else if (mode === "rainbow") {
        let red = Math.floor((Math.random() * 255));
        let green = Math.floor((Math.random() * 255));
        let blue = Math.floor((Math.random() * 255));
        e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    }
    else if (mode == "eraser") {
        e.target.style.backgroundColor = "white";
    }
}

function clearGrid()
{
    let x = document.querySelectorAll(".grid-item");
    x.forEach(y => y.style.backgroundColor = "white");
}

function generateGrid(size) {
    document.querySelector("#selection").innerText = `${size} x ${size}`;
    let container = document.querySelector("#container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let c = 0; c < size ** 2; c++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.addEventListener("mousedown", (e) => changeColour(e));
        cell.addEventListener("mouseover", (e) => {
            if (e.buttons == 1)
                changeColour(e);
        });
        container.appendChild(cell);
    }
}

generateGrid(document.querySelector("#size").value);