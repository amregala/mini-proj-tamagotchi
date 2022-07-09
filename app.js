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
    this.hunger += 1;
    let ageCount = 0;
    const ageIncrement = document.querySelector(".age");
    setInterval(() => {
      ageCount += 1;
      ageIncrement.innerHTML = `Age: ${ageCount}`;
    }, 3000);
    this.age = ageCount;
    return this.age;
  }
}

//INSTANTIATING A NEW PET
const dino = new Pet("Dino");
dino.getName();
//console.log(dino.getName());

//start of game
const start = document.querySelector(".startBtn");

const gameStart = function nameInput() {
  console.log("game started");
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

  dino.ageUp();
  dino.morph();

  //   if (this.age > 2) {
  //     console.log("morph");
  //   } else console.log("still baby");
};

start.addEventListener("click", gameStart);

//lightswitch
function onOff() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  // if (this.age > 2) {
  //const changeIcon = document.querySelector(".petIcon");
  //  console.log("morph");
  //changeIcon.innerHTML = src = "imgs/adultDino.png";
  // }
}

// seconds += 1;
// this.age =+
// ageIncrement.innerText =  `Age ${seconds}` ;

//   start.addEventListener("click", () => {
//     naming();
//     let timer = setInterval(() => {
//       tom.aging();
//       if (
//         dino.hunger >= 10 ||
//         dino.hunger <= 0 ||
//         dino.boredom >= 10 ||
//         tom.boredom <= 0 ||
//         tom.sleepy >= 10 ||
//         tom.sleepy <= 0
//       ) {
//         console.log("Gameover");
//         popScore.innerText = `Gameover. Your Tamagotchi has died!!`;
//         clearInterval(timer);
//       }
//     }, 5000);
//   });

// ageUp() {
//     this.age = 0;
//     var minutesToAdd = 30;
//     var currentDate = new Date();
//     var futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);
//   }

//   aging() {
//     this.age += 1;
//     this.hunger += 1;
//     this.sleep += 1;
//     this.boredom += 1;
//     console.log(this.hunger, this.age, this.sleep, this.boredom);
//     ageScore.innerText = this.age;
//     sleepScore.innerText = this.sleep;
//     hungerScore.innerText = this.hunger;
//     playScore.innerText = this.boredom;
//   }

//       const ageIncrement = document.querySelector(".age");
//       let ageCount = this.age;
//       ageCount += 1;
//       ageIncrement.innerText = `Age ${ageCount}`;
//     }, 10000);
//
