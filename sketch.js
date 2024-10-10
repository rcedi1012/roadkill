let aspectH;
let caranim1, caranim2, caranim3, caranim4, caranim5, caranim6;
let rep, mam, bird, amp, bug, other;
let roadkill;
let showb1, showb2, showb3, showb4, showb5, showb6;
let ending;
let arrowShow;
let endscreen;
let endImage;
let bg;
let deer, deerI, deerD, snake, snakea, snakek, birdi, birda, birdk;
let frog, froga, frogk, insect, insecta, insectk, fishi, fisha, fishk;
let car, blood;
let timer, stopwatch;
budgetValues = [];

function preload() {
    table = loadTable("roadkill_stats.csv", "csv", "header");
    endImage = loadImage("white-tailed-deer-934512_1920.jpg");
    bg = loadImage("Background.png");
    deerI = loadImage("Deer idle.gif");
    deerD = loadImage("Deer death.gif");
    snakea = loadImage("Snake.png");
    snakek = loadImage("Dead snake.png");
    birda = loadImage("Bird (2).png");
    birdk = loadImage("Dead bird.png");
    froga = loadImage("Frog.png");
    frogk = loadImage("Dead frog.png");
    insecta = loadImage("Bug (1).png");
    insectk = loadImage("Dead bug.png");
    fisha = loadImage("Fish.png");
    fishk = loadImage("Dead fish.png");
    car = loadImage("Car.png");
    blood = loadImage("Blood bar.png");
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
    arrowShow = false;
    endscreen = false;
    deer1 = true;
    deer2 = false;
    snake1 = true;
    snake2 = false;
    bird1 = true;
    bird2 = false;
    frog1 = true;
    frog2 = false;
    insect1 = true;
    insect2 = false;
    fish1 = true;
    fish2 = false;
    fishi = fisha;
    roadkill = 0;

    rep = new reptile();
    mam = new mammal();
    bird = new Bird();
    amp = new toad();
    bug = new Bug();
    other = new fish();
    ending = new Ending();

    numberOfRows = table.getRowCount();
    numberOfColumns = table.getColumnCount();

    canvas = createCanvas(windowWidth, aspectH);
    canvas.position(0, windowHeight/2 - (height/2));
    canvas.style('z-index', '-1');
}

function draw() {
    background(bg);
    frameRate(60);
    textFont('poor richard');

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

    ending.show();
    ending.killed();
    ending.end();

}

function mouseClicked() {
    ending.clicked();
}