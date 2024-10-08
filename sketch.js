let aspectH;
let caranim1, caranim2, caranim3, caranim4, caranim5, caranim6;
let rep, mam;

function setup() {
    aspectH = 9 * windowWidth/16;
    
    caranim1 = false;
    caranim2 = false;
    caranim3 = false;
    caranim4 = false;
    caranim5 = false;
    caranim6 = false;

    rep = new reptile();
    mam = new mammal();

    canvas = createCanvas(windowWidth, aspectH);
    canvas.position(0, windowHeight/2 - (height/2));
    canvas.style('z-index', '-1');
}

function draw() {
    background(30, 85, 92);

    fill(82, 73, 81);
    noStroke();
    rect(windowWidth * 0.05, 0, windowWidth * 0.9, aspectH);

    rep.show();
    mam.show();
    rep.hover();
    rep.car();
}