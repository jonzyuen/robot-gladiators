var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

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

    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );

    // check enemy health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");
      // win reward
      playerMoney = playerMoney + 20
      break;
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
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
      enemyHealth = 50;
      fight(pickedEnemyName);
    } else {
      // if player dead, stop game 
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    endGame();
  }
  // after loop ends, we are either dead or they are dead, so run endGame
  endGame();
};

// end the game 
var endGame = function() {
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

// start game when page loads
startGame();