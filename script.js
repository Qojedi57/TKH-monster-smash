//global variables, can be accessed by all functions

  //declare a variable named playerName that stores the value the player enters from a prompt
  var playerName = 8;
  //declare a variable named playerHealth and set it equal to the number value 15
var playerHealth = 15;
  //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName
var monsterName = "phoenix"
  //declare a variable named monsterHealth and set it equal to the number value 15
var monsterHealth = 15;
//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min
    )
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function playerAttack(){
//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
let playerAttackPoints = randomNum(1,5);

//subtract playerAttackPoints from monsterHealth and update the monsterHealth variable
monsterHealth = monsterHealth - playerAttackPoints
  //use an alert with string template literals to tell the player: 
 
  // 1. player attacked monster 
  // 2. how much damage the player did m
  // 3. how much health the monster has 
  alert('The player attacked the monster! The player did: ' + playerAttackPoints + ' The monsters health is now: ' + monsterHealth);

}

function monsterAttack(){
  //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints
let monsterAttackPoints = randomNum(1,5);
  //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 
playerHealth = playerHealth - monsterAttackPoints
  //use an alert with string template literals to tell the player: 
  alert('The monster attacked the player! The monster did: ' + monsterAttackPoints + ' The players health is now: ' + playerHealth);
  // 1. monster attacked player 
  // 2. how much damage the monster did 
  // 3. how much health the player has 
}

function playRound() {
  //use randomNum to return either 0 or 1
  let turn = randomNum(0,1);
  //0 = player goes first, 1 = monster goes first
  if(turn = 0){
    playerAttack ();
    if(monsterHealth > 0){
      monsterAttack();
    }
  }
   else{
    monsterAttack();
    if(playerHealth > 0){
      playerAttack();}
  }

  
  //use if/else to determine who goes first
  
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 
}

function playGame() {
  //beginning game message
  alert(
    `Hello, ${playerName}! You are fighting ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
  );

 let roundNumber = 0;

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(playerHealth > 0 && monsterHealth > 0){
    roundNumber++;
   
    alert('round;' + roundNumber + 'player health;' + playerHealth + 'monster health;' + monsterHealth)
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
 
   //call playRound inside the while loop
    playRound();
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if(monsterHealth <= 0 ){
    alert('you win!');
  }
  else {alert ('you lose!');}
}

//call playGame to start game
playGame();