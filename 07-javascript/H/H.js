class Basefly {
    constructor (type) {
        this.type = type;
    }

    fly () {
      console.log (`${this.type} is flying.`);
    }
}

class Baseswim {
    constructor (type) {
        this.type = type;
    }

    swim() {
      console.log (`${this.type} is swimming.`);
    }
}
class Baselayeggs {
    constructor (type) {
        this.type = type;
    }

    layeggs() {
      console.log (`${this.type} is laying eggs.`);
    }
}

class Basefeedmilk {
    constructor (type) {
        this.type = type;
    }

    feedmilk() {
      console.log (`${this.type} is feeding milk.`);
    }
}

class Bird {
    constructor (options) {
        this.flyer = new Basefly('Bird');
        this.layer = new Baselayeggs('Bird');
    }

    fly() {
      this.flyer.fly();
    }

    layeggs() {
      this.layer.layeggs();
    
    }
}

class Bat {
    constructor (options) {
        this.flyer = new Basefly ('Bat')
        this.feeder = new Basefeedmilk ('Bat');
    }
    fly() {
      this.flyer.fly();
    }

    feedmilk () {
      this.feeder.feedmilk();
    }
}

class Fish {
    constructor (options) {
        this.swimmer = new Baseswim ('Fish')
        this.layer = new Baselayeggs ('Fish');
    }

    swim () {
      this.swimmer.swim();
    }
    
    layeggs () {
      this.layer.layeggs();
    }
}

class Whale {
    constructor (options) {
        this.swimmer = new Baseswim ('Whale')
        this.feeder = new Basefeedmilk ('Whale');
    }

    swim () {
      this.swimmer.swim();    
    }

    feedmilk () {
      this.feeder.feedmilk();
    }
}

var bird1 = new Bird ();
bird1.fly();
bird1.layeggs();

var bat1 = new Bat ();
bat1.fly();
bat1.feedmilk();

var fish1 = new Fish ();
fish1.swim();
fish1.layeggs();

const whale1 = new Whale ();
whale1.swim();
whale1.feedmilk();
