/*
 * Global Variables
 */

let allEnemies = [];

// Enemies our player must avoid
/*
 * Bugs move left & right, 100px each;
 *
 *      initial position,   x=0, y=65
 *                          x=0, y=145
 *                          x=0, y=230
 */

class Enemy {
  constructor() {
    // Variables applied to each of our instances go here,
    this.x = 0;
    this.y;
    this.speed = .5;
    this.sprite = 'images/enemy-bug.png';
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (this.x % 505 ) + this.speed * dt;
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

/*
 * Player Move left & right, 100px each; x =0, 100, 200, 300, 400
 *
 *      Move up & down, 80px each, y = -10, 70, 150, 230, 310, 390
 *
 *      initial position x = 200, y = 390
 */

class Player {
  // Player initial position
  // ES6: Default Parameters
  constructor(x=200,y=390) {
	  this.x = x;
	  this.y = y;
    this.sprite = 'images/char-boy.png';
  }

  update() {
    // Handling collision with the player
    for (var i = 0; i < allEnemies.length; i++) {
      if (Math.abs(allEnemies[i].x - this.x) < 50 && Math.abs(allEnemies[i].y - this.y) < 50) {
        this.reset();
      }
    }
    // Reset game when reach to water
    if(this.y < 70){
      setTimeout(() => {alert(`You made it!`);},200 )
      this.reset();
    }
  }
  // Code from the render method for Enemy
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // A method to allow user to control character
  handleInput(keyCode) {
    console.log(keyCode);

    switch (keyCode) {
      case 'up':
      // Move up, and do not cross the top border
        if (this.y > -10) {
          this.y -= 80;
        }
        break;

      case 'down':
      // Move down, and do not cross the bottom border
        if (this.y < 390) {
          this.y += 80;
        }
        break;

      case 'right':
      // Move right, and do not cross the right border
        if (this.x < 400) {
          this.x += 505 / 5;
        }
        break;

      case 'left':
      // Move left, and do not cross the left border
        if (this.x > 0) {
          this.x -= 505 / 5;
        }
        break;
    }
  }

  // reset character to initial position
  reset() {
    this.x = 200;
    this.y = 390;
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Instantiate Player
let player = new Player();

// Instantiate ememies
for (var i = 0; i < 3; i++) {
  allEnemies[i] = new Enemy();
  allEnemies[i].y = i * 85 + 62; // pop up on three stone road
  allEnemies[i].speed = Math.random() * 200 + 100;
}



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
