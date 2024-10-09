class reptile {
    constructor() {
        this.x = windowWidth * 0.14;
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
        rect(this.x - (windowWidth * 0.025), this.cary, windowWidth * 0.05, aspectH * 0.075);
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
            this.cary -= aspectH * 0.075;
            cari += 1;
            if (this.cary < aspectH * 0.5) {
                this.color = color(227, 24, 10);
                roadkill += 1;
            }
        }
      }
}

class mammal {
  constructor() {
    this.x = windowWidth * 0.27;
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
    text('mammal',this.x - windowWidth * 0.025,this.y);
    rect(this.x - (windowWidth * 0.025), this.cary, windowWidth * 0.05, aspectH * 0.075);
  }

  hover() {
    if ((dist(mouseX, mouseY, this.x, this.y) < this.size)) {
      caranim2 = true;
      text(caranim2, windowWidth * 0.5, aspectH * 0.5);
    }
    else {
      caranim2 = false;
    }
  }

  car() {
    if ((caranim2 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        cari += 1;
        if (this.cary < aspectH * 0.5) {
            this.color = color(227, 24, 10);
            roadkill += 1;
        }
    }
  }
}

class Bird {
  constructor() {
    this.x = windowWidth * 0.42;
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
    text('bird',this.x - windowWidth * 0.025,this.y);
    rect(this.x - (windowWidth * 0.025), this.cary, windowWidth * 0.05, aspectH * 0.075);
  }

  hover() {
    if ((dist(mouseX, mouseY, this.x, this.y) < this.size)) {
      caranim3 = true;
      text(caranim3, windowWidth * 0.5, aspectH * 0.5);
    }
    else {
      caranim3 = false;
    }
  }

  car() {
    if ((caranim3 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        cari += 1;
        if (this.cary < aspectH * 0.5) {
            this.color = color(227, 24, 10);
            roadkill += 1;
        }
    }
  }
}

class toad {
  constructor() {
    this.x = windowWidth * 0.57;
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
    text('mammal',this.x - windowWidth * 0.025,this.y);
    rect(this.x - (windowWidth * 0.025), this.cary, windowWidth * 0.05, aspectH * 0.075);
  }

  hover() {
    if ((dist(mouseX, mouseY, this.x, this.y) < this.size)) {
      caranim4 = true;
      text(caranim4, windowWidth * 0.5, aspectH * 0.5);
    }
    else {
      caranim4 = false;
    }
  }

  car() {
    if ((caranim4 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        cari += 1;
        if (this.cary < aspectH * 0.5) {
            this.color = color(227, 24, 10);
            roadkill += 1;
        }
    }
  }
}

class Bug {
  constructor() {
    this.x = windowWidth * 0.72;
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
    text('mammal',this.x - windowWidth * 0.025,this.y);
    rect(this.x - (windowWidth * 0.025), this.cary, windowWidth * 0.05, aspectH * 0.075);
  }

  hover() {
    if ((dist(mouseX, mouseY, this.x, this.y) < this.size)) {
      caranim5 = true;
      text(caranim5, windowWidth * 0.5, aspectH * 0.5);
    }
    else {
      caranim5 = false;
    }
  }

  car() {
    if ((caranim5 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        cari += 1;
        if (this.cary < aspectH * 0.5) {
            this.color = color(227, 24, 10);
            roadkill += 1;
        }
    }
  }
}

class fish {
  constructor() {
    this.x = windowWidth * 0.87;
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
    text('mammal',this.x - windowWidth * 0.025,this.y);
    rect(this.x - (windowWidth * 0.025), this.cary, windowWidth * 0.05, aspectH * 0.075);
  }

  hover() {
    if ((dist(mouseX, mouseY, this.x, this.y) < this.size)) {
      caranim6 = true;
      text(caranim6, windowWidth * 0.5, aspectH * 0.5);
    }
    else {
      caranim6 = false;
    }
  }

  car() {
    if ((caranim6 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        cari += 1;
        if (this.cary < aspectH * 0.5) {
            this.color = color(227, 24, 10);
            roadkill += 1;
        }
    }
  }
}
//things to do:
//create art
//animal hit/cars initiated score
//the actual graph part
//if user breaks for all the animals, good ending
