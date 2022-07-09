console.log("Tamagotch | Mini Project");

// PET CLASS
class Pet {
  constructor(name, age, hunger, sleepiness, bordem) {
    this.name = name;
    this.hunger = 10;
    this.sleepiness = 0;
    this.bordem = 0;
  }

  //PET CLASS METHODS
  //getName () - returns name
  getName() {
    return this.name;
  }
}

// const startGame  = {
//     startGame() {
//         Pet.name = prompt('What is your Dino\'s name?')
//         const userID = document.querySelector(`#userName`);
//         nameID.innerText = (`${Pet.name}`)

// }

let intro = document.querySelector("#userName");
intro.innerHTML = "Hello!";

let name = prompt("What's your Dino's name?");
intro.innerHTML = `Dino-${name}`;

//INSTANTIATING A NEW PET
const dino = new Pet("Dino");
dino.getName();
//console.log(dino.getName());
