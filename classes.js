class reptile {
    constructor() {
        this.x = windowWidth * 0.14;
        this.y = aspectH * 0.9;
        this.size = windowWidth * 0.025;
        this.cary = aspectH;
        this.color = color(55);
        this.i = 0;
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
      }

      car() {
        if ((caranim1 == true) && (this.cary > -50)) {
            this.cary -= aspectH * 0.075;
            cari += 1;
            if (this.cary < this.y) {
                this.color = color(227, 24, 10);
                roadkill += 1;
                showb1 = true;
              }
          }
        }
      
        bar() {
          if (showb1 == true) {
            budgetValues[this.i] = table.getString(this.i, 1);
            rect(this.i * (windowWidth * 0.15) + (windowWidth * 0.1), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
            text(budgetValues[this.i], windowWidth * 0.5, aspectH * 0.5);
          }
        }
}

class mammal {
  constructor() {
    this.x = windowWidth * 0.27;
    this.y = aspectH * 0.9;
    this.size = windowWidth * 0.025;
    this.cary = aspectH;
    this.color = color(55);
    this.i = 1;
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
  }

  car() {
    if ((caranim2 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        cari += 1;
        if (this.cary < this.y) {
            this.color = color(227, 24, 10);
            roadkill += 1;
            showb2 = true;
          }
      }
    }
  
    bar() {
      if (showb2 == true) {
        budgetValues[this.i] = table.getString(this.i, 1);
        rect(this.i * (windowWidth * 0.15) + (windowWidth * 0.1), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
      }
    }
}

class Bird {
  constructor() {
    this.x = windowWidth * 0.42;
    this.y = aspectH * 0.9;
    this.size = windowWidth * 0.025;
    this.cary = aspectH;
    this.color = color(55);
    this.i = 2;
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
  }

  car() {
    if ((caranim3 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        cari += 1;
        if (this.cary < this.y) {
            this.color = color(227, 24, 10);
            roadkill += 1;
            showb3 = true;
        }
    }
  }

  bar() {
    if (showb3 == true) {
      budgetValues[this.i] = table.getString(this.i, 1);
      rect(this.i * (windowWidth * 0.15) + (windowWidth * 0.1), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
    }
  }
}

class toad {
  constructor() {
    this.x = windowWidth * 0.57;
    this.y = aspectH * 0.9;
    this.size = windowWidth * 0.025;
    this.cary = aspectH;
    this.color = color(55);
    this.i = 3;
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
  }

  car() {
    if ((caranim4 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        cari += 1;
        if (this.cary < this.y) {
            this.color = color(227, 24, 10);
            roadkill += 1;
            showb4 = true;
        }
    }
  }

  bar() {
    if (showb4 == true) {
      budgetValues[this.i] = table.getString(this.i, 1);
      rect(this.i * (windowWidth * 0.15) + (windowWidth * 0.1), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
    }
  }
}

class Bug {
  constructor() {
    this.x = windowWidth * 0.72;
    this.y = aspectH * 0.9;
    this.size = windowWidth * 0.025;
    this.cary = aspectH;
    this.color = color(55);
    this.i = 4;
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
  }

  car() {
    if ((caranim5 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        cari += 1;
        if (this.cary < this.y) {
            this.color = color(227, 24, 10);
            roadkill += 1;
            showb5 = true;
        }
    }
  }

  bar() {
    if (showb5 == true) {
      budgetValues[this.i] = table.getString(this.i, 1);
      rect(this.i * (windowWidth * 0.15) + (windowWidth * 0.1), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
    }
  }
}

class fish {
  constructor() {
    this.x = windowWidth * 0.87;
    this.y = aspectH * 0.9;
    this.size = windowWidth * 0.025;
    this.cary = aspectH;
    this.color = color(55);
    this.i = 5;
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
  }

  car() {
    if ((caranim6 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        cari += 1;
        if (this.cary < this.y) {
            this.color = color(227, 24, 10);
            roadkill += 1;
            showb6 = true;
        }
    }
  }

  bar() {
    if (showb6 == true) {
      budgetValues[this.i] = table.getString(this.i, 1);
      rect(this.i * (windowWidth * 0.15) + (windowWidth * 0.1), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
    }
  }
}
//things to do:
//create art
//animal hit/cars initiated score
//the actual graph part
//if user breaks for all the animals, good ending
