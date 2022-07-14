console.log("Tamagotch | Mini Project");

// PET CLASS
class Pet {
  constructor(name, age, hunger, sleepiness, bordem) {
    this._name = name;
    this._age = 0;
    this._hunger = 10;
    this._sleepiness = 0;
    this._bordem = 0;
  }
  //pet class getters
  get name() {
    return this._name;
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
  get age() {
    return this._age;
  }

  set hunger(num) {
    return this._hunger;
  }
  //pet class methods
  ageUp() {
    let ageCount = 0;
    setInterval(() => {
      ageCount += 1;
      ageIncrement.innerHTML = `Age: ${ageCount}`;
    }, 2000);
    this._age = ageCount;
    return this._age;
  }

  imHungry() {
    this._hunger;
    setInterval(() => {
      this._hunger += 1;
      hunger.innerHTML = `Hunger ${this._hunger}`;
    }, 8000);
    return this._hunger;
  }
}
// end of pet class

// EXTENDING PET CLASS WITH DINOSAUR CLASS
class Dinosaur extends Pet {
  constructor(name, age) {
    super(name, age);
  }
  morph() {
    setTimeout(() => {
      alert("Your baby Dino is now a toddler!");
      document.querySelector(".petIcon").src = "imgs/adultDino.png";
    }, 11000);
  }

  eat() {
    console.log("eat method was clicked");
    console.log((dino.hunger -= 3));
  }
}

// end of dinosaur

//INSTANTIATING A NEW PET
const dino = new Dinosaur("Dino");
dino.name;
console.log(dino.name);

//DOM ELEMENTS
const start = document.querySelector(".startBtn");
const user = document.querySelector("#userName");
const ageIncrement = document.querySelector(".age");
const petIcon = document.querySelector(".petIcon");
const age = document.querySelector(".age");
let hunger = document.querySelector(".hungerScore");
const sleepy = document.querySelector(".sleepyScore");
const bored = document.querySelector(".bordemScore");
const feed = document.querySelector(".feedBtn");

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
  // clears message on display
  const clear = document.querySelector(".hola");
  clear.innerHTML = "";
  //updates to status bar display
  age.innerHTML = `Age: ${dino.age}`;
  hunger.innerHTML = `Hunger ${dino.hunger}`;
  sleepy.innerHTML = `Sleepiness ${dino.sleepy}`;
  bored.innerHTML = `Boredem ${dino.bordem}`;
  dino.ageUp(); //starting the counter for age
  dino.morph(); // morphs the dino image from baby to adult
  dino.imHungry();
}

start.addEventListener("click", gameStart);
feed.addEventListener("click", dino.eat);

//lightswitch
function onOff() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
