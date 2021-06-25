// game functions

// rng 
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var fightOrSkip = function() {
  // ask player fight or skip 
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  // if player skips, stop loop 
  promptFight = promptFight.toLowerCase();
  if (promptFight === "skip") {
    // skip confirmation
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // penalty for skipping
      playerInfo.playerMoney = Math.max(0, playerInfo.money -10);

      // return true if player wants to leave 
      return true;
    }
  }
  return false;
};

// fight function
var fight = function(enemy) {
  while(playerInfo.health > 0 && enemy.health > 0) {
    if (fightOrSkip()) {
      // if true, break loop and leave fight 
      break;
    };

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );

    // check enemy health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      // win reward
      playerInfo.money = playerInfo.money + 20;
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // remove player hp by subtracting amount set in enemy.attack variable 
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    // check player health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
};

// fight robot loop, one at a time
var startGame = function() {

  // reset player stats 
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    // if player alive, keep fighting
    if (playerInfo.health > 0) {
      // round counter 
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
      // pick new enemy 
      var pickedEnemyObj = enemyInfo[i];
      // reset enemy health 
      pickedEnemyObj.health = randomNumber(40, 60);

      fight(pickedEnemyObj);

      // if we're not at the last enemy and player is alive
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, go to store 
        if (storeConfirm) {
        shop();
        }
      }
    } else {
      // if player dead, stop game 
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  
  // after loop ends, we are either dead or they are dead, so run endGame
  endGame();
};

// end the game 
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
  // if player alive, player wins 
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  } else {
    window.alert("You've lost your robot in battle.");
  }

  // play again? 
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart game 
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// shop between battles function 
var shop = function() {
  // ask player what they'd like to do 
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter: 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
  );

  // shop options 
shopOptionPrompt = parseInt(shopOptionPrompt);

  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;

    case 2:
      playerInfo.refillHealth();
      break;

    case 3:
      window.alert("Leaving the store.");
      // do nothing
      break;
      
    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force valid option 
      shop();
      break;
  }
};

var getPlayerName = function() {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};

// variables start 

// player info 


var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
    } else {
    window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars");
    this.attack += 6;
    this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  }
};

// enemy info 
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber (10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber (10, 14)
  }
];

// variables end 

// start game when page loads
startGame();