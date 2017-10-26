function setup() {
    let canvas = document.getElementById('tegning');
    let ctx = canvas.getContext('2d');
    let xpos = 0;
    let vx = 2;

   
   
   
   
    //hus
    ctx.fillStyle = 'rgb(240, 230, 0)';
    ctx.fillRect(175, 350, 150, 150);

    //Vinduer
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(190, 380, 30, 40);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(235, 380, 30, 40);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(280, 380, 30, 40);

    ctx.fillStyle = 'rgba(70,40,20,0.9)';
    ctx.fillRect(235, 450, 30, 60);
    //tak
    ctx.beginPath();
    ctx.moveTo(250, 200);
    ctx.lineTo(160, 360);
    ctx.lineTo(340, 360);
    ctx.fill();

    //human

    /**ctx.beginPath();
    ctx.arc(90, 440, 20, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(100, 450);
    ctx.arc(90, 447, 8, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(97, 440);
    ctx.arc(80, 440, 4, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(98, 437);
    ctx.arc(100, 440, 4, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
    */

    function figur (ctx,dx) {
        ctx.beginPath();
        ctx.fillStyle = 'rgb(200,0,0)'
        ctx.arc(dx+100,375,30,0,2*Math.PI)
        ctx.stroke();
    }

    function tegn() {
        ctx.clearRect(0,0,500,500);
        figur(ctx, xpos);
        xpos += vx;   
        if (xpos > 500) {
            vx= -2;
        }
        if (xpos < -150) {
            vx = +2;
        }
    }
    setInterval(tegn,40);
}
