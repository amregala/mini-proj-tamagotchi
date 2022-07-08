console.log("Tamagotch | Mini Project");

// PET CLASS
class Pet {
  constructor(name, age, hunger, sleepiness, bordem) {
    this.name = name;
    this.health = this.hunger = 10;
    this.sleepiness = 0;
    this.bordem = 0;
  }

  //PET CLASS METHODS
  //get name () - returns name
  getName() {
    return this.name;
  }
}
