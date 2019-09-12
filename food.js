

function food() {
	this.y = floor(random((height-snake.scl)/snake.scl))*snake.scl;
	this.x = floor(random((width-snake.scl)/snake.scl))*snake.scl;

	
	this.pickLocation = function() {
		this.y= floor(random((height-snake.scl)/snake.scl))*snake.scl;
		this.x = floor(random((width-snake.scl)/snake.scl))*snake.scl;

	}


	this.update = function() {

					
		if(this.x == snake.x && this.y == snake.y) {
			this.pickLocation();
			snake.total ++;
			// console.log(snake.total);
					console.log(this.x,this.y);
// 
			


		}
	}

	this.show = function() {
		fill(255,0,100);
		rect (this.x , this.y, snake.scl , snake.scl);
	}
}