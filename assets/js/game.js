var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// fight function
var fight = function(enemyNames) {
  while(playerHealth > 0 && enemyHealth > 0) {

  // ask fight or skip
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if skip, stop loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // skip confirmation
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // penalty for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemyHealth = Math.max(0, enemy.health - damage);
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );

    // check enemy health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");
      // win reward
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    // remove player hp by subtracting amount set in enemy.attack variable 
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// fight robot loop, one at a time
var startGame = function() {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    // if player alive, keep fighting
    if (playerHealth > 0) {
      // round counter 
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
      // pick new enemy 
      var pickedEnemyName = enemyNames[i];
      // reset enemy health 
      enemyHealth = randomNumber(40, 60);

      // if we're not at the last enemy and player is alive
      if (playerHealth > 0 && i < enemyNames.length - 1) {
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
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // shop options 
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      if (playerMoney >=7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

      // heal and subtract money 
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;

    case "upgrade":
    case "UPGRADE":
      if(playerMoney >=7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;

    case "leave":
    case "LEAVE":
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

// start game when page loads
startGame();