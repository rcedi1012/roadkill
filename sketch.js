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
let deer, deerI, deerD, deerK; //snake, snakea, snakek, birdi, birda, birdk;
//let frog, froga, frogk, insect, insecta, insectk, fish, fisha, fishk;
budgetValues = [];

function preload() {
    table = loadTable("roadkill_stats.csv", "csv", "header");
    endImage = loadImage("white-tailed-deer-934512_1920.jpg");
    bg = loadImage("Background.png");
    deerI = loadImage("Deer idle.gif");
    deerD = loadImage("Deer death.gif");
    deerK = loadImage("Dead deer.png");
    /* snakea = loadImage("Snake.png");
    snakek = loadImage("Dead snake.png");
    birda = loadImage("Bird (2).png");
    birdk = loadImage("Dead bird.png");
    froga = loadImage("Frog.png");
    frogk = loadImage("Dead frog.png");
    insecta = loadImage("Bug (1).png");
    insectk = loadImage("Dead bug.png");
    fisha = loadImage("Fish.png");
    fishk = loadImage("Dead fish.png"); */
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
    deer = deerI;
    snake = snakea;
    birdi = birda;
    frog = froga;
    insect = insecta;
    fish = fisha;
    cari = 0;
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