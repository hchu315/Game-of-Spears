class Cursor(ctx) {
  constructor {
    this.ctx = ctx
  }

  mouseClicked() {
    canvas.addEventListener("mousedown", getPosition, false)
  }

  getPosition(event) {
    let x = new Number();
    let y = new Number();

    if (event.x != undefined && event.y != undefined)
    {
      x = event.x;
      y = event.y; 
    }
    else {
      
    }
  }
}