let aspectH;
let caranim1, caranim2, caranim3, caranim4, caranim5, caranim6;
let rep, mam, bird, amp, bug, other;
let cari;
let roadkill;
let showb1, showb2, showb3, showb4, showb5, showb6;
budgetValues = [];

function preload() {
    table = loadTable("roadkill_stats.csv", "csv", "header");
}

function setup() {
    aspectH = 9 * windowWidth/16;
    //aspectH = windowHeight;

    caranim1 = false;
    caranim2 = false;
    caranim3 = false;
    caranim4 = false;
    caranim5 = false;
    caranim6 = false;
    showb1 = false;
    showb2 = false;
    showb3 = false;
    showb4 = false;
    showb5 = false;
    showb6 = false;
    cari = 0;
    roadkill = 0;

    rep = new reptile();
    mam = new mammal();
    bird = new Bird();
    amp = new toad();
    bug = new Bug();
    other = new fish();

    numberOfRows = table.getRowCount();
    numberOfColumns = table.getColumnCount();

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
    rep.hover();
    rep.car();
    rep.bar();
    rep.show();

    mam.hover();
    mam.car();
    mam.bar();
    mam.show();

    bird.hover();
    bird.car();
    bird.bar();
    bird.show();

    amp.hover();
    amp.car();
    amp.bar();
    amp.show();

    bug.hover();
    bug.car();
    bug.bar();
    bug.show();

    other.hover();
    other.car();
    other.bar();
    other.show();

    text('x: ' + mouseX * 100 / windowWidth, windowWidth * 0.75, aspectH * 0.15);
    text('y: ' + mouseY * 100 / aspectH, windowWidth * 0.75, aspectH * 0.25);
}