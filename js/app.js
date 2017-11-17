/*
 * Global Variables
 */

let allEnemies = [];

// Enemies our player must avoid
class Enemy {
  constructor(x,y) {
    // Variables applied to each of our instances go here,
	  this.x = x;
	  this.y = y;
    this.sprite = 'images/enemy-bug.png';
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x,y) {
	  this.x = x;
	  this.y = y;
    this.sprite = 'images/char-boy.png';
  }

  update(dt) {

  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(keyCode) {
		console.log(keyCode);
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

/*
 * Player Move left & right, 100px each; x =0, 100, 200, 300, 400
 *
 *      Move up & down, 80px each, y = -10, 70, 150, 230, 310, 390
 *
 *      initial position x = 200, y = 390
 */

let player = new Player(200,390);

/*
 * Bugs move left & right, 100px each;
 *
 *      initial position,   x=0, y=65
 *                          x=0, y=145
 *                          x=0, y=230
 */

allEnemies.push(new Enemy(0, 65));
allEnemies.push(new Enemy(0, 145));
allEnemies.push(new Enemy(0, 230));

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
