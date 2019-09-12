

function snake() {
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;
	this.scl = 15;
	this.tail = [];
	this.total = 0;
	this.moving;

	this.death = function () {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d1 = dist(this.x, this.y, pos.x, pos.y);
      // var d2 = dist(this.x,this.y,width,this.y);

      if (d1 < 1) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
        this.vx =  0;
        this.vy = 0 ;
      }
    }
  }


	

	this.update = function() {
		if(this.total === this.tail.length){
		 for (var i=0; i < this.tail.length - 1;i++){
    	 this.tail[i] = this.tail[i+1];
     }
		}
		if (this.total >= 1){

			 this.tail[this.total-1] = createVector(this.x,this.y);
		}
    
	

		this.x += this.vx*this.scl;
		this.y += this.vy*this.scl;
		this.x = constrain(this.x,0,width-this.scl);
		this.y = constrain(this.y,0,height-this.scl);
	}

	this.show = function () {
		fill(250);
		for (var i=0; i < this.tail.length;i++){
    	 
    	 rect(this.tail[i].x,this.tail[i].y,this.scl,this.scl);
    	 

        }
		
		rect(this.x,this.y,this.scl,this.scl);
	}

	this.up = function(){
		this.vx = 0;
		this.vy = -1;
		this.moving = "up";
	}
	this.down = function() {
		this.vx = 0;
		this.vy = 1;
		this.moving = "down";
	}
	this.left = function () {
		this.vx = -1;
		this.vy = 0;
		this.moving = "left";
	}
	this.right = function (){
		this.vx = 1;
		this.vy = 0;
		this.moving = "right";
	}


}