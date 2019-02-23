class Ammo {
  constructor(ctx, yPos) {
    this.ctx = ctx;
    // this.clip = []
    this.yPos = 25 * yPos + 25 ;
  }

  // useAmmo() {
  //   if (this.clip.length > 0) {
  //     this.clip.pop
  //   } else {

  //   }
  // }

  createAmmo() {
    const ctx = this.ctx;
    // const yPos = this.clip.length  * 25 + 25 
    // const ammoIndicator = document.querySelector('.ammo-indicator');
    // const test = document.createElement('img');
    // test.src = "https://i.imgur.com/N4ib91M.png";
    // ammoIndicator.appendChild(test);

    const img = new Image();
    img.src = "https://i.imgur.com/N4ib91M.png"

    // this.clip.push(ctx.drawImage(img, 0, 0, 70, 25, 0, yPos, 70, 25));


    // for (let index = 0, yPos = 0; index < 3; index++, yPos+=25) {
    ctx.drawImage(img, 0, 0, 70, 25, 0, this.yPos, 70, 25);
    // }
    
    // console.log(this.clip)
    // console.log(this.clip)
    // ctx.drawImage(img, 0, 0, 70, 25, 0, 25, 70, 25)
    // ctx.drawImage(img, 0, 0, 70, 25, 0, 50, 70, 25)
    // ctx.drawImage(img, 0, 0, 70, 70, 0, 0, 70, 70)
    // ctx.drawImage(img, 0, 0, 70, 70, 0, 0, 70, 70)
    // ctx.drawImage(img, 0, 0, 70, 70, 0, 75, 70, 70)
  }

  // depleteAmmo() {
    // console.log(this.clip)
    // console.log('werk werk')
    // if (this.clip.length === 0) alert('Reload!');

    // this.clip.pop();
  // }
  
  

  render() {
    this.createAmmo();

    // console.log(this.clip)
    // this.createAmmo();
    // this.clip.forEach(missile => missile);
  }

}

export default Ammo;

// const ctx = this.ctx;
// let img = new Image();
// img.src = "https://i.imgur.com/UeOlFUN.png";

// ctx.drawImage(img, 0, 0, 1022, 428, 0, 0, 1100, 700);