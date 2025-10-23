let xAxis = []
let yAxis = []
let xRect = []
let yRect = []

function setup (){
    createCanvas(600,600);

    }

function draw (){
    background(200,30,80);;
    hundred();
}

function hundred(){
    for(let i = 0; i < 100; i++){
        rect(xAxis[i], yAxis[i], xRect[i], yRect[i]);

    }
}

function keyPressed(){
    if (keyCode === 32) {
        yAxis.splice(0,100);
        yAxis.splice(0,100);
        
        xRect.splice(0,100);
        xRect.splice(0,100);

for (let i = 0; i < 100; i++)  
    xAxis.push(random(0,600));
for (let i = 0; i < 100; i++)
    yAxis.push(random(0,600));
for (let i = 0; i < 100; i++)
    xRect.push(random(5,10));
for (let i = 0; i < 100; i++)
    yRect.push(random(5,10));

    }
}