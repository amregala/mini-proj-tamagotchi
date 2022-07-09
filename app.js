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

//INSTANTIATING A NEW PET
const dino = new Pet("Dino");
dino.getName();
//console.log(dino.getName());

// Name input functionality
const start = document.querySelector(".startBtn");

function nameInput() {
  userID = prompt("What is your Dino's name?");
  const user = document.querySelector("#userName");
  user.innerHTML = `Dino-${userID}`;
}

start.addEventListener("click", nameInput);
