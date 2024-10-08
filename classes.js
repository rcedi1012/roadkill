class reptile {
    constructor() {
        this.x = windowWidth * 0.15;
        this.y = aspectH * 0.5;
        this.size = windowWidth * 0.025;
        this.cary = aspectH;
        this.color = color(55);
    }
    
      show() {
        stroke(0);
        fill(this.color);
        ellipse(this.x, this.y, this.size *2);
        fill(255);
        text('reptile',this.x - windowWidth * 0.025,this.y);
      }
    
      hover() {
        if ((dist(mouseX, mouseY, this.x, this.y) < this.size)) {
          caranim1 = true;
          text(caranim1, windowWidth * 0.5, aspectH * 0.5);
        }
      }

      car() {
        if ((caranim1 == true) && (this.cary > -50)) {
            rect(this.x - (windowWidth * 0.025), this.cary, windowWidth * 0.05, aspectH * 0.075);
            this.cary -= aspectH * 0.075;
            if (this.cary < aspectH * 0.5) {
                this.color = color(227, 24, 10);
            }
        }
      }
}

class mammal {
    constructor() {
        this.x = windowWidth * 0.25;
        this.y = aspectH * 0.5;
        this.size = windowWidth * 0.025;
    }

    show() {
        stroke(0);
        fill(255);
        ellipse(this.x, this.y, this.size *2);
    }
}

//things to do:
//create art
//animal hit/animal breaked/cars initiated score
//the actual graph part
//if user breaks for all the animals, good ending
