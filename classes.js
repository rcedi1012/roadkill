class reptile {
  constructor() {
    this.x = windowWidth * 0.12;
    this.y = aspectH * 0.9;
    this.size = windowWidth * 0.025;
    this.cary = aspectH;
    this.color = color(55);
    this.i = 0;
}

  show() {
    noStroke();
    noFill();
    ellipse(this.x, this.y, this.size *2);
    if (snake1 == true) {
      image(snakea,windowWidth * 0.078, aspectH * 0.85,windowWidth * 0.1, aspectH * 0.07);
    }
    if (snake2 == true) {
      image(snakek,windowWidth * 0.078, aspectH * 0.85,windowWidth * 0.1, aspectH * 0.07);
    }
    image(car,this.x - (windowWidth * 0.05), this.cary, windowWidth * 0.1, aspectH * 0.3);
  }

  hover() {
    if ((dist(mouseX, mouseY, this.x, this.y) < this.size)) {
      caranim1 = true;
    }
  }

  car() {
    if ((caranim1 == true) && (this.cary > -500)) {
        this.cary -= aspectH * 0.075;
        if (this.cary < this.y) {
            snake1 = false;
            snake2 = true;
            roadkill += 1;
            showb1 = true;
          }
      }
    }
  
    bar() {
      if (showb1 == true) {
        budgetValues[this.i] = ((table.getString(this.i, 1)* 100 /4632)) * ((aspectH * 0.9)/ 100);
        image(blood,this.i * (windowWidth * 0.15) + (windowWidth * 0.095), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
        textSize(windowWidth * 0.02);
        fill(116, 201, 212);
        text(table.getString(this.i,1), windowWidth * 0.094, aspectH * 0.5);
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
    noStroke();
    noFill();
    ellipse(this.x, this.y, this.size *2);
    if (deer1 == true) {
      image(deerI, windowWidth * 0.15, aspectH * 0.47,windowWidth * 0.5, aspectH * 0.5);
    }
    if (deer2 == true) {
      image(deerD, windowWidth * 0.15, aspectH * 0.47,windowWidth * 0.5, aspectH * 0.5);
    }
    fill(255);
    image(car,this.x - (windowWidth * 0.05), this.cary, windowWidth * 0.1, aspectH * 0.3);
  }

  hover() {
    if ((dist(mouseX, mouseY, this.x, this.y) < this.size)) {
      caranim2 = true;
    }
  }

  car() {
    if ((caranim2 == true) && (this.cary > -500)) {
        this.cary -= aspectH * 0.075;
        if (this.cary < this.y) {
            deer1 = false;
            deer2 = true;
            roadkill += 1;
            showb2 = true;
          }
      }
    }
  
    bar() {
      if (showb2 == true) {
        budgetValues[this.i] = ((table.getString(this.i, 1)* 100 /4632));
        budgetValues[this.i] = budgetValues[this.i] * (aspectH * 0.9)/ 100;
        image(blood,this.i * (windowWidth * 0.15) + (windowWidth * 0.095), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
        fill(116, 201, 212);
        text(table.getString(this.i,1), windowWidth * 0.2422, aspectH * 0.29);
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
    noStroke();
    noFill();
    ellipse(this.x, this.y, this.size *2);
    if (bird1 == true) {
      image(birda,windowWidth * 0.375, aspectH * 0.85,windowWidth * 0.1, aspectH * 0.08);
    }
    if (bird2 == true) {
      image(birdk,windowWidth * 0.375, aspectH * 0.85,windowWidth * 0.1, aspectH * 0.08);
    }
    image(car,this.x - (windowWidth * 0.05), this.cary, windowWidth * 0.1, aspectH * 0.3);
  }

  hover() {
    if ((dist(mouseX, mouseY, this.x, this.y) < this.size)) {
      caranim3 = true;
    }
  }

  car() {
    if ((caranim3 == true) && (this.cary > -500)) {
        this.cary -= aspectH * 0.075;
        if (this.cary < this.y) {
            bird1 = false;
            bird2 = true;
            roadkill += 1;
            showb3 = true;
        }
    }
  }

  bar() {
    if (showb3 == true) {
      budgetValues[this.i] = ((table.getString(this.i, 1)* 100 /4632));
      budgetValues[this.i] = budgetValues[this.i] * (aspectH * 0.9)/ 100;
      image(blood,this.i * (windowWidth * 0.15) + (windowWidth * 0.095), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
      fill(116, 201, 212);
      text(table.getString(this.i,1), windowWidth * 0.3965, aspectH * 0.74);
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
    }
  }

  car() {
    if ((caranim4 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        if (this.cary < this.y) {
            this.color = color(227, 24, 10);
            roadkill += 1;
            showb4 = true;
        }
    }
  }

  bar() {
    if (showb4 == true) {
      budgetValues[this.i] = ((table.getString(this.i, 1)* 100 /4632));
        budgetValues[this.i] = budgetValues[this.i] * (aspectH * 0.9)/ 100;
      image(blood,this.i * (windowWidth * 0.15) + (windowWidth * 0.095), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
      text(table.getString(this.i,1), windowWidth * 0.547, aspectH * 0.81);
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
    }
  }

  car() {
    if ((caranim5 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        if (this.cary < this.y) {
            this.color = color(227, 24, 10);
            roadkill += 1;
            showb5 = true;
        }
    }
  }

  bar() {
    if (showb5 == true) {
      budgetValues[this.i] = ((table.getString(this.i, 1)* 100 /4632));
        budgetValues[this.i] = budgetValues[this.i] * (aspectH * 0.9)/ 100;
      image(blood,this.i * (windowWidth * 0.15) + (windowWidth * 0.095), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
      text(table.getString(this.i,1), windowWidth * 0.697, aspectH * 0.81);
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
    }
  }

  car() {
    if ((caranim6 == true) && (this.cary > -50)) {
        this.cary -= aspectH * 0.075;
        if (this.cary < this.y) {
            this.color = color(227, 24, 10);
            roadkill += 1;
            showb6 = true;
        }
    }
  }

  bar() {
    if (showb6 == true) {
      budgetValues[this.i] = ((table.getString(this.i, 1)* 100 /4632));
        budgetValues[this.i] = budgetValues[this.i] * (aspectH * 0.9)/ 100;
      image(blood,this.i * (windowWidth * 0.15) + (windowWidth * 0.095), (aspectH * 0.9) - budgetValues[this.i], windowWidth * 0.05, budgetValues[this.i]);
      text(table.getString(this.i,1), windowWidth * 0.857, aspectH * 0.81);
    }
  }
}

class Ending {
  constructor() {
    this.x = windowWidth * 0.04;
    this.y = aspectH * 0.02;
    this.sizex = windowWidth * 0.9;
    this.sizey = aspectH * 0.1;
    this.color = 244, 216, 205;
  }

  show() {
    if (arrowShow == true) {
      noStroke();
      fill(this.color);
      rect(this.sizex, this.sizey, this.x, this.y);
      triangle(windowWidth * 0.97, aspectH * 0.107, windowWidth * 0.93, aspectH * 0.08, windowWidth * 0.93, aspectH * 0.14);
    }

    if ((mouseX > this.sizex) && (mouseX < this.x+this.sizex) &&
    (mouseY > this.sizey) && (mouseY < this.y+this.sizey)) {
      this.color = 191, 95, 78;
    }
    else {
      this.color = 244, 216, 205;
    }
  }

  killed() {
    if (roadkill >= 180) {
      arrowShow = true;
    }
  }

  clicked() {
    if ((mouseX > this.sizex) && (mouseX < this.x+this.sizex) &&
    (mouseY > this.sizey) && (mouseY < this.y+this.sizey)) {
      endscreen = true;
    }
  }

  end() {
    if (endscreen == true) {
      image(endImage, 0, 0, windowWidth, aspectH);
      textAlign(CENTER, CENTER);
      textFont('poor richard');
      textSize(windowWidth * 0.03);
      fill(58, 46, 57);
      text("All the data presented was gathered using a \ncommunity initiative to record roadkill on the streets of Texas. \nDespite the numbers being significant, \nthere are still many undocumented animals that have been killed due to careless drivers. \nI urge you to try your best to break for any animals that may be crossing the road, \nso that there may be one last flattened body on the scorching asphalt.", windowWidth * 0.5, aspectH * 0.5 );
    }
  }
}

