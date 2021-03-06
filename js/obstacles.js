let obstaclesArray = [];

class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height/3) + 20;
        this.bottom = (Math.random() * canvas.height/3) + 20;
        this.x = canvas.width;
        this.width = 20;
        this.color = 'mediumorchid';
        this.counted = false;
        this.border = 'papayawhip';
    }

    draw(){
        ctx.fillStyle= this.color;
        ctx.strokeStyle=this.border;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
        ctx.strokeRect(this.x, 0, this.width, this.top);
        ctx.strokeRect(this.x, canvas.height - this.bottom, this.width, this.bottom);

    }
    update(){
        this.x -= gameSpeed;
        if (!this.counted && this.x < puffy.x){
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacles(){
    //every 50 frames
    if (frame%150 === 0){
        obstaclesArray.unshift(new Obstacle);
    }
    for (let i = 0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}