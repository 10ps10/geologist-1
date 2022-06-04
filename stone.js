class Stone {
    constructor(x, y) {
        var options = {
            'ristituition' :0.8,
            'friction' :0.9,
            'density':30
        };
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 150;
        this.height= 40;
        World.add(world,this.body);
    };
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.y, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('black');
        fill('grey')
        rectMode(CENTER)
        rect(0,0,this.width, this.height);
        pop();
    }
}