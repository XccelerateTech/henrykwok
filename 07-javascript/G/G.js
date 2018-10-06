class flyAnimal {
  constructor (options) {
    this.type = options.type;
    this.fly = options.fly;
  }
}

class swimAnimal {
  constructor (options) {
    this.type = options.type;
    this.swim = options.swim;
  }
}

class Bird extends flyAnimal {
  constructor (options) {
    super (options);
    this.eggs = options.eggs;
  }

    lay() {
      return `A ${this.type} can ${this.fly} and ${this.eggs}.`
  }
}

class Bat extends flyAnimal {
  constructor (options) {
    super (options);
    this.feed = options.feed;
  }

    feedmilk () {
      return `A ${this.type} can ${this.fly} and ${this.feed}.`;
  }
}

class Fish extends swimAnimal {
  constructor (options) {
    super (options);
    this.eggs = options.eggs;
  }
    lay() {
      return `A ${this.type} can ${this.swim} and ${this.eggs}.`;
  }
}

class Whale extends swimAnimal {
  constructor (options) {
    super (options);
    this.feed = options.feed;
  }

    feedmilk () {
      return `A ${this.type} can ${this.swim} and ${this.feed}.`;
  }
}

const bird = new Bird ({type: "Bird", fly: "fly", eggs: "lay eggs"});
console.log (bird.lay());

const bat = new Bat ({type: "Bat", fly: "fly", feed: "feed milk"});
console.log (bat.feedmilk());

const fish = new Fish ({type: "Fish", swim: "swim", eggs: "lay eggs"});
console.log (fish.lay());

const whale = new Whale ({type: "whale", swim: "swim", feed: "feed milk"});
console.log (whale.feedmilk());