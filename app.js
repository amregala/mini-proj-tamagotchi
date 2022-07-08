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

  //setName () - prompts user to name Pet
  setName() {
    this.name = prompt('Name your Dinogotchi')
    const nameID = document.querySelector('.name')
    nameID.innerText = `Dino-${this.name}`
  }
  
  //getName () - returns name
  getName() {
    return this.name;
  }
}

//INSTANTIATING A NEW PET
const dino = new Pet("Dino");
dino.getName();
//console.log(dino.getName());
