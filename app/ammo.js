class Ammo {
  constructor(ctx, yPos) {
    this.ctx = ctx;
    // this.clip = []
    this.yPos = 25 * yPos + 25 ;
  }

  // createAmmo() {
  //   const ctx = this.ctx;
  //   // const yPos = this.clip.length  * 25 + 25 
  //   // const ammoIndicator = document.querySelector('.ammo-indicator');
  //   // const test = document.createElement('img');
  //   // test.src = "https://i.imgur.com/N4ib91M.png";
  //   // ammoIndicator.appendChild(test);

  //   const img = new Image();
  //   img.src = "https://i.imgur.com/N4ib91M.png"

  //   // this.clip.push(ctx.drawImage(img, 0, 0, 70, 25, 0, yPos, 70, 25));


  //   // for (let index = 0, yPos = 0; index < 3; index++, yPos+=25) {
  //   ctx.drawImage(img, 0, 0, 70, 25, 0, this.yPos, 70, 25);
  //   // }
  // }

  // depleteAmmo() {
  //   const ammoIndicator = document.querySelector('.ammo-indicator');
  //   const missile = 

  //   ammoIndicator.removeChild()
  // }

  createAmmo() {
    const ammoIndicator = document.querySelector('.ammo-indicator');
    const newImg = document.createElement("img");
    newImg.src = "https://i.imgur.com/N4ib91M.png";
    newImg.classList.add("missile");

    ammoIndicator.appendChild(newImg);
  }

  render() {
    this.createAmmo();

    // console.log(this.clip)
    // this.createAmmo();
    // this.clip.forEach(missile => missile);
  }

}

export default Ammo;