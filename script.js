/* // In this assignment you will use the Monster Smash Homework as a starting point.
You will refactor your completed Monster Smash Homework to use Classes that create objects. The gameplay will remain the same, using playRound() and playGame() functions to run the game. The game will still be played in the browser using alerts, no graphical user interface is required

Requirements:
Parent class for Monster and Hero named Fighter 
Fighter has properties: name, healthPoints
Fighter has an attack method that takes in the opponent's object and decreases its' health
Monster and Hero will extend Fighter and add at least 1 unique property to each 
Create 1 instance each of Monster and Hero 
edit playRound() to call the attack methods of the Monster and Hero objects  */

class Fighter {
  //constructor function - takes in these params when a new Bike instance is created
  //constructor builds the object with the given data, It is used to initialize object properties
  //It is executed automatically when a new object is created
  constructor(name, healthPoints) {
    //this = referring to itself
    // https://www.w3schools.com/js/js_this.asp

   
    this.name = name;
    this.healthPoints = healthPoints;
  }
  attack(Fighter) {
    let attackPoints = randomNum(1,6);
  Fighter.healthPoints = Fighter.healthPoints - attackPoints;
  alert(this.name + " attacked " + Fighter.name + " and now " + Fighter.name + " has a health level of " + Fighter.healthPoints);

  }
}

class Monster extends Fighter {
  constructor(name, healthPoints){
    super(name,healthPoints)

    // this.name = name;
    // this.healthPoints = healthPoints;
  }
}

let monster = new Monster("phoneix", 15);

class Hero extends Fighter {
  constructor(name, healthPoints){
    super(name,healthPoints)
    // this.name = name;
    // this.healthPoints = healthPoints;
  }
}

let hero = new Hero("Tommy", 15);

//global variables, can be accessed by all functions


  /* //declare a variable named playerName that stores the value the player enters from a prompt
  var playerName = 8;
  //declare a variable named playerHealth and set it equal to the number value 15
var playerHealth = 15;
  //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName
var monsterName = "phoenix"
  //declare a variable named monsterHealth and set it equal to the number value 15
var monsterHealth = 15; */
//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min
    )
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

/* function playerAttack(){
//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
let playerAttackPoints = randomNum(1,6);

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
let monsterAttackPoints = randomNum(1,6);
  //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 
playerHealth = playerHealth - monsterAttackPoints
  //use an alert with string template literals to tell the player: 
  alert('The monster attacked the player! The monster did: ' + monsterAttackPoints + ' The players health is now: ' + playerHealth);
  // 1. monster attacked player 
  // 2. how much damage the monster did 
  // 3. how much health the player has 
} */

function playRound() {
  //use randomNum to return either 0 or 1
  let turn = randomNum(0,1);
  //0 = player goes first, 1 = monster goes first
  if(turn = 0){
    hero.attack(monster);
    if(monster.healthPoints > 0){
      monster.attack(hero);
    }
  }
   else{
    monster.attack(hero);
    if(hero.healthPoints > 0){
      hero.attack(monster);}
  }

  
  //use if/else to determine who goes first
  
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 
}

function playGame() {
  //beginning game message
  alert(
    `Hello, ${hero.name}! You are fighting ${monster.name}! Your health is at ${hero.healthPoints}, ${monster.name}'s health is at ${monster.healthPoints}`
  );

 let roundNumber = 0;

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(hero.healthPoints> 0 && monster.healthPoints > 0){
    roundNumber++;
   
    alert('round;' + roundNumber + 'player health;' + hero.healthPoints + 'monster health;' + monster.healthPoints)
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
 
   //call playRound inside the while loop
    playRound();
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if(monster.healthPoints <= 0 ){
    alert('you win!');
  }
  else {alert ('you lose!');}
}

//call playGame to start game
playGame();