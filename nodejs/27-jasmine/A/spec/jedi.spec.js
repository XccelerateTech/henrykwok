const Jedi = require('../lib/starwars').Jedi;
const Sith = require('../lib/starwars').Sith; 

describe("Test Jedi spec", function(){
    
    let skywalker;
    let vidal

    beforeEach(function(){
        skywalker = new Jedi("Obiwan A", 80, 100);
        vidal = new Sith("Anakin B", 70, 200);
    });

    it("Obiwan A has correct properties", function(){
        expect(skywalker.name).toBe("Obiwan A");
        expect(skywalker.power).toBe(80);
        expect(skywalker.health).toBe(100);
    });

    it("Obiwan A should be an instance of Jedi", function(){
        expect(skywalker instanceof Jedi).toBeTruthy();
    });

    it("Obiwan A has attacked correct target", function(){
        spyOn(skywalker, 'attack').and.callThrough();
        skywalker.attack(vidal);

        expect(skywalker.attack).toHaveBeenCalledWith(vidal);
    });

    it("Obiwan A get injured by the opponent", function(){
        spyOn(skywalker, 'injure').and.callThrough();
        vidal.attack(skywalker);

        expect(skywalker.injure).toHaveBeenCalled();
    });

    it("should get damage with a amount by opponent", function(){
        let hp = skywalker.health;
        skywalker.injure(70);

        expect(skywalker.health).toEqual(hp - 70);
    });

    it("should be dead when his health is below 0", function() {
        spyOn(skywalker, 'dead');
        skywalker.health = -20;
        expect(skywalker.dead).toBeTruthy();        
    })
});