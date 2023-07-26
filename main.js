
var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
ctx.beginPath();
var width = c.width;
var height = c.height;

let eyes1 = {
    currentX: 220,
    currentY: 220,
    targetX: 220,
    targetY: 220,
};

let eyes2 = {
    currentX: 275,
    currentY: 220,
    targetX: 275,
    targetY: 220,
};

let messi={
    currentX: 20,
    currentY: 20,
    targetX: 20,
    targetY: 20,
}

let fps = 30;
let fpsInterval = 1000 / fps;
let then = Date.now();
let delta = 0;

let eyeHeight = 80;
let alpha = 0.1;

document.addEventListener("mousemove", (e1) => {
    eyes1.targetX = e1.clientX;
    eyes1.targetY = e1.clientY;
    console.log(eyes1);
});

document.addEventListener("mousemove", (e2) => {
    eyes2.targetX = e2.clientX;
    eyes2.targetY = e2.clientY;
    console.log(eyes2);
});

let radius = 20; // Bán kính ban đầu
let increasing = true; // Cờ chỉ định hướng phóng to hoặc thu nhỏ
let ismessi = true;
var speed = 0.5;

document.addEventListener("click", (m10) => {
    const audio = document.getElementById("myAudio");
    audio.play();
    ismessi=false;

    messi.targetX = m10.clientX;
    messi.targetY = m10.clientY;
    console.log(messi);

    //animate();
  });

function animateCircle() {
    
   
  }

function Draw(){
    setInterval(()=>{
    delta = Date.now() - then;
    let fps = 1000 / delta;
    then = Date.now();
    alpha += 0.5;
    eyeHeight += Math.sin(alpha) * 10;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
    ctx.fillText(`FPS: ${Math.round(fps * 1000) / 1000}`, 10, 40);
    // Đặt màu sắc cho fill là màu vàng
    ctx.fillStyle = "yellow";

    


    //đầu
    ctx.beginPath();
    // ctx.roundRect(110, 100, 220, 270, 10);
    ctx.rect(140, 120, 220, 230);
    ctx.fillStyle = "#F5F5F5";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //dưới
    ctx.beginPath();
    ctx.ellipse(250, 349, 110, 14, 0, 0, Math.PI);
    ctx.fillStyle = "#F5F5F5";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //trên
    ctx.beginPath();
    ctx.ellipse(250, 120, 70, 7, 0, Math.PI, 0);
    ctx.fillStyle = "#F5F5F5";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    // ctx.roundRect(110, 100, 220, 270, 10);
    ctx.rect(180, 120, 138, 10);
    ctx.fillStyle = "#F5F5F5";
    ctx.fill();
    ctx.closePath();


    //tai trái
    ctx.beginPath();
    ctx.roundRect(140, 80, 40, 80,100);
    ctx.fillStyle = "#F5F5F5";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //tai phải
    ctx.beginPath();
    ctx.roundRect(320, 80, 40, 80,100);
    ctx.fillStyle = "#F5F5F5";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //mặt
    //ctx.scale(1.2, 1);
    ctx.beginPath();
    ctx.arc(250, 240, 75, 0, 2 * Math.PI);
    ctx.fillStyle = "#F4D2C3";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //con ngươi phải
    //ctx.scale(0.5, 1);
    ctx.beginPath();
    ctx.arc(eyes1.currentX, eyes1.currentY,8, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //con ngươi trái
    //ctx.scale(1, 1);
    ctx.beginPath();
    ctx.arc(eyes2.currentX, eyes2.currentY,8, 0, 2 * Math.PI);
    
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    // ctx.roundRect(110, 100, 220, 270, 10);
    ctx.rect(141, 126, 218, 35);
    ctx.fillStyle = "#F5F5F5";
    ctx.fill();
    ctx.closePath();

    if (ismessi){
        ctx.beginPath();
        ctx.arc(250, 270, 20, 0, Math.PI);
        ctx.stroke();
        ctx.closePath();
    }else{
        ctx.beginPath();
        ctx.arc(270, 270, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        var img = new Image();
        img.src="messi.png";
        //ctx.drawImage(img,messi.targetX,messi.targetY,100,120);

        function animate(){
            //ctx.clearRect(0,0,0,0);
            var dx = messi.targetX - messi.currentX;
            var dy = messi.targetY - messi.currentY;

            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > speed) {
                messi.currentX += (dx / distance) * speed;
                messi.currentY += (dy / distance) * speed;
            } else {
                // Nếu khoảng cách di chuyển nhỏ hơn tốc độ, đặt vị trí hiện tại là vị trí đích
                messi.currentX = messi.targetX;
                messi.currentY = messi.targetY;
            }
            ctx.drawImage(img,messi.currentX,messi.currentY,100,120);
            requestAnimationFrame(animate);
        } animate();

    }
    
    // Điều chỉnh bán kính cho frame tiếp theo
    if (increasing) {
      radius += 2;
      if (radius >= 30) {
        increasing = false;
      }
    } else {
      radius -= 2;
      if (radius <= 20) {
        increasing = true;
      }
    }

    
    
    if (eyes1.currentX < eyes1.targetX) {
        eyes1.currentX += 1;
    } else if (eyes1.currentX > eyes1.targetX) {
        eyes1.currentX -= 1;
    }
    if (eyes1.currentX>250){
        eyes1.currentX -= 1;
    }
    if (eyes1.currentX<210){
        eyes1.currentX += 1;
    }


    if (eyes1.currentY < eyes1.targetY) {
        eyes1.currentY += 1;
    } else if (eyes1.currentY > eyes1.targetY) {
        eyes1.currentY -= 1;
    }
    if (eyes1.currentY>250){
        eyes1.currentY -= 1;
    }
    if (eyes1.currentY<210){
        eyes1.currentY += 1;
    }



    if (eyes2.currentX < eyes2.targetX) {
        eyes2.currentX += 1;
    } else if (eyes2.currentX > eyes2.targetX) {
        eyes2.currentX -= 1;
    }
    if (eyes2.currentX>305){
        eyes2.currentX -= 1;
    }
    if (eyes2.currentX<255){
        eyes2.currentX += 1;
    }


    if (eyes1.currentY < eyes2.targetY) {
        eyes2.currentY += 1;
    } else if (eyes2.currentY > eyes2.targetY) {
        eyes2.currentY -= 1;
    }
    if (eyes2.currentY>250){
        eyes2.currentY -= 1;
    }
    if (eyes2.currentY<210){
        eyes2.currentY += 1;
    }

    
},fpsInterval);
}




Draw();


