console.log("Tamagotch | Mini Project");

//DOM ELEMENTS
const petIcon = document.querySelector(".petIcon");
const user = document.querySelector("#userName");
const age = document.querySelector(".age");
let hunger = document.querySelector(".hungerScore");
const sleepy = document.querySelector(".sleepyScore");
const bored = document.querySelector(".bordemScore");
const start = document.querySelector(".startBtn");
const feed = document.querySelector("#feedBtn");
const sleep = document.querySelector("#sleepBtn");
const play = document.querySelector("#playBtn");
let actionBtn = document.querySelectorAll(".actBtn");

// PET CLASS
class Pet {
  constructor(name, age, hunger, sleepiness, bordem) {
    this._name = name;
    this._age = 0;
    this._hunger = 9;
    this._sleepiness = 5;
    this._bordem = 4;
  }
  //pet class getters
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get hunger() {
    return this._hunger;
  }
  get sleepy() {
    return this._sleepiness;
  }
  get bordem() {
    return this._bordem;
  }

  //pet class methods
  ageUp() {
    setInterval(() => {
      this._age += 1;
      age.textContent = `Age: ${this._age}`;
    }, 2000);
    return this._age;
  }

  imHungry() {
    // if (this._hunger > 10) {
    //   alert("please feed me");
    // }
    setInterval(() => {
      this._hunger += 1;
      hunger.textContent = `Hunger ${this._hunger}`;
      return this._hunger;
    }, 6000);
  }

  imSleepy() {
    setInterval(() => {
      this._sleepiness += 1;
      sleepy.textContent = `Sleepiness ${this._sleepiness}`;
      return this._sleepiness;
    }, 4000);
  }

  imBored() {
    setInterval(() => {
      this._bordem += 2;
      bored.textContent = `Bordem ${this._bordem}`;
      return this._bordem;
    }, 4000);
  }
}
// end of pet class

// EXTENDING PET CLASS WITH DINOSAUR CLASS
class DinosaurMorph extends Pet {
  constructor(name, age, hunger, sleepiness, bordem) {
    super(name, age, hunger, sleepiness, bordem);
  }
  morph() {
    setTimeout(() => {
      alert("Your baby Dino is now a toddler!");
      document.querySelector(".petIcon").src = "imgs/adultDino.png";
    }, 11000);
  }
}
// end of dinosaur class

//INSTANTIATING A NEW PET
const dino = new DinosaurMorph("Dino");
dino.name;
console.log(dino.name);

//start of game --> prompts for name and sets initial display screen
function gameStart() {
  console.log("game started");

  userID = prompt("What is your Dino's name?");
  if (typeof userID === "string") {
    user.innerHTML = ` Dino-${userID}`;
    start.removeEventListener("click", gameStart);
  } else {
    prompt2 = prompt("Please will you give me a name?");
    if (typeof prompt2 === "string") {
      user.innerHTML = `Dino-${prompt2}`;
      start.removeEventListener("click", gameStart);
    } else {
      user.innerHTML = `Dino-John Doe`;
      start.removeEventListener("click", gameStart);
    }
  }

  // clears message that initially appears on display
  const clear = document.querySelector(".messages");
  clear.textContent = "";
  // score status bar displays
  age.textContent = `Age: ${dino.age}`;
  hunger.textContent = `Hunger ${dino.hunger}`;
  sleepy.textContent = `Sleepiness ${dino.sleepy}`;
  bored.textContent = `Boredem ${dino.bordem}`;

  dino.ageUp(); //starting the age counter
  dino.morph(); // morphs the dino image from baby to adult
  dino.imHungry(); // starts the hunger increment
  dino.imSleepy(); // starts the sleepy increment
  dino.imBored(); // starts the boredem increment
}

// if (=== 10) {
//   console.log("an alert should work here");
//alert("You died of old age");
//}

const eating = () => {
  // console.log("eat method was clicked");
  hunger.textContent = `Hunger ${(dino._hunger -= 2)}`;
  if (hunger.textContent === 0) {
    alert("Just testing");
  }
  return dino._hunger;
};

const sleeping = () => {
  sleepy.textContent = `Sleepiness ${(dino._sleepiness -= 2)}`;
  return dino._sleepiness;
};

const playing = () => {
  bored.textContent = `Bordem ${(dino._bordem -= 1)}`;
  return dino._bordem;
};

start.addEventListener("click", gameStart);
feed.addEventListener("click", eating);
sleep.addEventListener("click", sleeping);
play.addEventListener("click", playing);

//lightswitch
function onOff() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
