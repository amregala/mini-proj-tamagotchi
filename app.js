console.log("Tamagotch | Mini Project");

// PET CLASS
class Pet {
  constructor(name, age, hunger, sleepiness, bordem) {
    this.name = name;
    this.age = 0;
    this.hunger = 10;
    this.sleepiness = 0;
    this.bordem = 0;
  }

  //PET CLASS METHODS
  //getName () - returns name
  getName() {
    return this.name;
  }
  getHunger() {
    return this.hunger;
  }
  getSleepy() {
    return this.sleepiness;
  }
  getBorded() {
    return this.bordem;
  }
  ageInit() {
    return this.age;
  }
  ageUp() {
    this.age = 0;
  }
}

//INSTANTIATING A NEW PET
const dino = new Pet("Dino");
dino.getName();
//console.log(dino.getName());

const start = document.querySelector(".startBtn");

const gameStart = function nameInput() {
  userID = prompt("What is your Dino's name?");
  const user = document.querySelector("#userName");
  user.innerHTML = `Dino-${userID}`;

  const clear = document.querySelector(".hola");
  clear.innerHTML = "";

  const age = document.querySelector(".age");
  age.innerHTML = `Age ${dino.ageInit()}`;

  const hunger = document.querySelector(".hungerScore");
  hunger.innerHTML = `Hunger ${dino.getHunger()}`;

  const sleepy = document.querySelector(".sleepyScore");
  sleepy.innerHTML = `Sleepiness ${dino.getSleepy()}`;

  const bored = document.querySelector(".bordemScore");
  bored.innerHTML = `Boredem ${dino.getBorded()}`;

start.addEventListener("click", gameStart);
