class reptile {
    constructor() {
        this.x = windowWidth * 0.71;
        this.y = aspectH * 0.5;
        this.size = windowWidth * 0.025;
        this.cary = aspectH;
    }
    
      show() {
        stroke(0);
        fill(55);
        ellipse(this.x, this.y, this.size *2);
      }
    
      hover() {
        if ((dist(mouseX, mouseY, this.x, this.y) < this.size)) {
          caranim1 = true;
          text(caranim1, windowWidth * 0.5, aspectH * 0.5);
        }
        else {
          caranim1 = false;
        }
      }

      car() {
        if ((caranim1 == true) && (this.cary > -50)) {
            rect(this.x - (windowWidth * 0.025), this.cary, windowWidth * 0.05, aspectH * 0.075);
            this.cary -= aspectH * 0.075;
        }
      }
}

class mammal {
    constructor() {
        this.x = windowWidth * 0.15;
        this.y = aspectH * 0.5;
        this.size = windowWidth * 0.025;
    }

    show() {
        stroke(0);
        fill(255);
        ellipse(this.x, this.y, this.size *2);
    }
}