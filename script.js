let mode = "normal";
let clicked = false;
function changeMode(e)
{
    mode = e.id;
}

function changeColour(e)
{
    if(clicked)
    {
        if(mode === "normal")
        {
            let colour = document.querySelector("#colourpicker").value;
            e.target.style.backgroundColor = colour;
        }
        else if(mode === "rainbow")
        {
            let red = Math.floor((Math.random() * 255));
            let green = Math.floor((Math.random() * 255));
            let blue = Math.floor((Math.random() * 255));
            e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
        }
        else if(mode == "eraser")
        {
            e.target.style.backgroundColor = "white";
        }
    }
}

function clearGrid()
{
    let x = document.querySelectorAll(".grid-item");
    x.forEach(y => y.style.backgroundColor = "white");
}

function generateGrid(size)
{
    document.getElementById("selection").innerText = ""+size+"x"+size;
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let c = 0; c < (size * size); c++)
    {
        let cell = document.createElement("div");
        cell.className = "grid-item";
        cell.addEventListener("mouseover", changeColour);
        cell.addEventListener("mousedown", changeColour);
        container.appendChild(cell);
    }
}
generateGrid(document.getElementById("size").value);

document.querySelector("#container").addEventListener("click", () => clicked = !clicked);
document.querySelectorAll("button").forEach(button => button.addEventListener("click", () => clicked = false));