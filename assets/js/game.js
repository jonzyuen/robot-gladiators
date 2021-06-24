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
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
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
      playerMoney = playerMoney + 20
      break;
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    // subtract 'enemyAttack' from 'playerHealth' and update 'playerHealth'
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

// execute function
for (var i = 0; i < enemyNames.length; i++) {
  debugger;
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
