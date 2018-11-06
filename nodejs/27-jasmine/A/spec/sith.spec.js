let Sith = require('../lib/starwars').Sith;
let Jedi = require('../lib/starwars').Jedi;

describe("Test Sith", function (){

    let anakin;
    let jesus;

    beforeEach(function(){
        anakin = new Sith("Anakin B", 70, 400);
        jesus = new Jedi("Skywalk", 90, 200);
    });

    it("Anakin B has correct properties", function(){
        expect(anakin.name).toBe("Anakin B");
        expect(anakin.power).toBe(70);
        expect(anakin.health).toBe(400);
    });

    it("Anakin B should be an instance of Sith", function(){
        expect(anakin instanceof Sith).toBeTruthy();
    });

    it("should attack correct target", function(){
        spyOn(anakin, 'attack').and.callThrough();
        anakin.attack(jesus);
        expect(anakin.attack).toHaveBeenCalledWith(jesus);
    });

    it("should be injured by opponent", function(){
        spyOn(anakin, 'injure').and.callThrough();
        jesus.attack(anakin);
        expect(anakin.injure).toHaveBeenCalled();
    });

    it("should get damage by an amount", function (){
        let hp = anakin.health;
        anakin.injure(90);
        expect(anakin.health).toEqual(hp - 90);
    });

    it("should be dead when his health is below 0", function(){
        spyOn(anakin, "dead");
        anakin.health = -10;
        expect(anakin.dead).toBeTruthy();
    })
})