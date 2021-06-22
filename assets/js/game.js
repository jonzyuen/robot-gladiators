var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

if (playerHealth > 0) {
    console.log("Your player is still alive!");
}

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // alert players that round is starting
    window.alert("Welcome to Robot Gladiators!");

    // subtract value of 'playerAttack' from value of 'enemyHealth' and use that to update 'enemyHealth'
    enemyHealth = enemyHealth - playerAttack;

    // log result message to console
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy health
    if (enemyHealth<= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " stil has " + enemyHealth + " health left.");
    }

    // subtract value of 'enemyAttack' from value of 'playerHealth' and use that to update 'playerHealth'
    playerHealth = playerHealth - enemyAttack;

    // log result message to console
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();