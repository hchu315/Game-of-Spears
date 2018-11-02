class Dragon {
  constructor(ctx) {
    this.ctx = ctx;
    this.randomdir = [-4, 4];
    this.x = 300;
    this.y = 400;
    this.dx = 4;
    this.dy = 4;
    this.randomdir
    setInterval(() => {
      this.dx = this.randomdir[Math.round(Math.random())];
      this.dy = this.randomdir[Math.round(Math.random())];
    }, 2000);

    this.ballRadius = 10;
  }

  draw() {
    const ctx = this.ctx;
    const dy = this.dy;


    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    if (this.y + this.dy > window.innerHeight - 100 - this.ballRadius) {
      this.dy = -this.dy;
    } else if (this.y + this.dy < 0 || this.x + this.dx < 0 || this.x > window.innerWidth - this.ballRadius) {

    }
    this.x += this.dx;
    this.y += this.dy;

  }

  // mouseClicked() {

  // }
  // render() {
  //   this.drawDragon();
  // }
}

export default Dragon;