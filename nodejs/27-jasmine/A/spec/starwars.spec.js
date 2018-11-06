let starwars = require('../lib/starwars');


describe('Test Duel', function (){

    let fakeObiwan;
    let fakeAnakin;

    beforeEach(function() {
        fakeObiwan = new starwars.Jedi ("Obiwan K", 80, 800);
        fakeAnakin = new starwars.Sith ("Anakin S", 100, 1000); 
        duel = starwars.duel;
        timerCallback = jasmine.createSpy("timerCallback");
        jasmine.clock().install();
    });

    it("Obiwan starts attack", function(){
        spyOn(fakeObiwan, 'attack')
        duel(fakeObiwan, fakeAnakin);

        expect(fakeObiwan.attack).toHaveBeenCalled();
    });

    it("Anakin attacks", function(){
        spyOn(fakeAnakin, 'attack');
        duel(fakeObiwan, fakeAnakin);

        expect(fakeAnakin.attack).toHaveBeenCalled();
    });

    it("Anakin get injured", function(){
        spyOn(fakeAnakin, 'injure');
        duel(fakeObiwan, fakeAnakin);
        
        expect(fakeAnakin.injure).toHaveBeenCalled();
    });

    it("Anakin is dead", function(){
        spyOn(fakeAnakin, 'dead');
        duel(fakeObiwan, fakeAnakin);
        
        expect(fakeAnakin.dead).toHaveBeenCalled();
    })

    it("Obiwan attacks for 6 times", function(){
        spyOn(fakeObiwan, 'attack');
        duel(fakeObiwan, fakeAnakin);

        expect(fakeObiwan.attack.calls.count()).toEqual(6);
    });

    it("Anakin attacks for 6 times", function(){
        spyOn(fakeAnakin, 'attack');
        duel(fakeObiwan, fakeAnakin);

        expect(fakeAnakin.attack.calls.count()).toEqual(6);
    });

    it("Obiwan get hurt", function(){
        spyOn(fakeObiwan, 'injure');
        duel(fakeObiwan, fakeAnakin);

        expect(fakeObiwan.injure.calls.argsFor(1)).toBeLessThanOrEqual(89);
    });

    it("Anakin is rescued", function(done){
        duel(fakeObiwan, fakeAnakin);
        jasmine.clock().tick(5001);
        expect(fakeAnakin.health).toEqual(800);
        expect(fakeAnakin.power).toEqual(90);
        done();
    });

    afterEach(function(){
        jasmine.clock().uninstall();
    });
});