class Monster {
    constructor(name, health) {
      this.name = name;
      this.health = health;
    }
  
  
    wound(damage) {
      while (this.health > 0) {
          this.health -= damage;
          console.log(this.health);
        }
      console.log ("Monster dead");
    }
  }
  
  const monster1 = new Monster ("XYC", 100);
  function hero() {
    let damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    
    return monster1.wound(damage);
  };
  
  hero ();


/*class Monster {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  wound() {
    if (this.health > 0) {
      function hero() {
        let max = 20;
        let min = 5;
        let damage = Math.floor(Math.random() * (max - min + 1)) + min;
        return damage;
      };

      while (this.health > 0) {
        this.health--;
        this.health -= hero();
        console.log(this.health);
      };
    };
    console.log ("Monster dead");
    
  }
}


var monster1 = new Monster("XYC", 100);
console.log(monster1);
console.log(monster1.wound());*/