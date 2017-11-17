Arcade Game Frogger -- Udacity Project
===============================


##Project Instructions Analysis

---
### Classes


```javascript
class Player {
  constructor() {
    /*
     *  1 ------
     *  Loading image by setting this.sprite to the appropriate image
     *  
     *  2 ------
     *  Setting the Player initial location
     */
  }
    /*
     *  1 ---- updateMethod
     *
     *  Updating the player location
     *
     *  Handling collision with the player
     */

     /*
      *  2 ---- renderMethod
      *
      *  Use code from the render method for enemy
      */

      /*
       *  3 ---- handleInput Method
       *
       *    - left, right, up, and down
       *    - Cannot move off screen
       *    - Reset player when reach the water
       */
}
```

```javascript
class Enemies {
  constructor() {
    /*
     *  1 ------
     *  Loading image by setting this.sprite to the appropriate image
     *  
     *  2 ------
     *  Setting the Enemy initial location
     *  
     *  3 ------
     *  Setting the Enemy Speed
     */
  }
    /*
     *  ---- updateMethod
     *  Updating the enemy location
     *
     *  Handling collision with the player
     */
}
```

---
### Functions
```javascript
function gameInitial (){
  /*
  * 1. paved blocks
  * 2. water
  * 3. lawn
  */
}
```

```javascript
function colliding (){
  // ... detect colliding between player and bugs
}
```

```javascript
function playerMovement (){
  // ... The player can move left, right, up and down
}
```

```javascript
function bugsMoveSpeed (){
  /*
  * ... The enemies move in varying speeds
  * on the paved block portion of the scene
  *
  */
}
```

---
### Bonus functions

```javascript
  function playerSelections() {
    /*
     *  allow the user to select the image for the
     *  player character before starting the game
     *
     */
  }
```

```javascript
function score() {
  /*
   * score for the game
   * the score can increase each time the player
   * reaches the water, and it can be reset to 0
   * when collision occurs (or it can be reduced).
   *
   */
}
```

```javascript
function collectibles() {
  // allowing the player to collect gems
}
```
