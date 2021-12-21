function newImage(src, positiontype, left, bottom) {
    let gameimg = document.createElement('img');
    gameimg.src = src;
    gameimg.style.position = positiontype;
    gameimg.style.left = left;
    gameimg.style.bottom = bottom;
    document.body.append(gameimg);
    return gameimg
}

newImage("./assets/green-character.gif", "fixed", "100px", "100px");
newImage("./assets/pine-tree.png", "fixed", "450px", "200px");
newImage("./assets/tree.png", "fixed", "200px", "300px");
newImage("./assets/pillar.png", "fixed", "350px", "100px");
newImage("./assets/crate.png", "fixed", "150px", "200px");
newImage("./assets/well.png", "fixed", "500px", "425px");

function newItem(src, positiontype, left, bottom) {
    let gameitem = newImage(src, positiontype, left, bottom);
    
    gameitem.addEventListener("dblclick", function(){
        gameitem.remove();
    })

    return gameitem
}

newItem("./assets/sword.png", "fixed", "500px", "405px")
newItem("./assets/sheild.png", "fixed", "165px", "185px")
newItem("./assets/staff.png", "fixed", "600px", "100px")

let sky = newImage("./assets/sky.png")
let skyh = (window.innerHeight/100) / 4
let skyw = window.innerWidth/100
for (let i = 0; i < skyw; i++){
    for(let j = 0; j < skyh; j++){
        newImage("./assets/sky.png", "static", "0px" , "0px")
    }
}

let grass = newImage("./assets/grass.png")
let grassh = (window.innerHeight/100) / 2
let grassw = window.innerWidth/100
for (let i = 0; i < grassw; i++){
    for(let j = 0; j < grassh; j++){
        newImage("./assets/grass.png", "static", "0px" , "0px")
    }
}
