let aspectH;
let caranim1, caranim2, caranim3, caranim4, caranim5, caranim6;

function setup() {
    aspectH = 9 * windowWidth/16;
    canvas = createCanvas(windowWidth, aspectH);
    canvas.position(0, windowHeight/2 - (height/2));
    canvas.style('z-index', '-1');
}

function draw() {
    background(220);
}