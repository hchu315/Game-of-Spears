class Dragon {
  constructor(ctx) {
    this.ctx = ctx;
    this.randomdir = [-2, 2];
    this.x = Math.random() * 50;
    this.y = Math.random() * 50;
    this.dx = 2;
    this.dy = 2;
    this.randomdir
    setInterval(() => {
      this.dx = this.randomdir[Math.round(Math.random())];
      this.dy = this.randomdir[Math.round(Math.random())];
    }, 2000);

    this.ballRadius = 20;
  }

  draw() {
    const ctx = this.ctx;
    const dy = this.dy;
    // debugger
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    if (this.y + this.dy > 650 - this.ballRadius) {
      this.dy = -this.dy;
    } else if (this.y + this.dy < 0 || this.x + this.dx < 0 || this.x > window.innerWidth - this.ballRadius) {

    }
    this.x += this.dx;
    this.y += this.dy;

  }

  // onClick(event) {
  //   let cx = event.pageX;
  //   let cy = event.pageY;
  //   alert(+cx + ',' + cy);
  //   // console.log(cx, cy, this.x, this.y);
  //   let dist = Math.hypot((event.pageX - this.x), (event.pageY - this.y))
  //   if (dist < this.ballRadius) {
  //     this.destroyDragon(cx, cy);
  //   }
  // }

  render() {
    this.draw();
  }
}

export default Dragon;