const container = document.createElement("div");
container.classList.add("container");

to: for (let i = 0; i < 20; i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    
    for (let j = 0; j < 15; j++) {
        const item = document.createElement("div");
        item.classList.add("item");
        line.appendChild(item);
    }
    
    container.appendChild(line);
}

document.body.appendChild(container);
