describe("testing songs", () => { 
let Song = require('../lib/song');
let song;


//Use beforeEach to create new objects before testing.
beforeEach(function(){
    song1 = new Song("Waiting Around", "Vacancy EP", "Aisha");
    song2 = new Song("All is Well", "Sounds Like Help", "Austin Basham");
    song3 = new Song("Sounds Like Help", "Sounds Like Help", "Austin Basham");
    song4 = new Song("I Know", "I Am Nice", "Sammy Brue");
});

afterEach(function(){
    song1;
    song2;
    song3;
    song4;
})
    
//Tests below
    it("song1 should have correct names", () => {        
        expect(song1.name).toBe("Waiting Around");
        expect(song1.album).toBe("Vacancy EP");
        expect(song1.author).toBe("Aisha");
    });

    it("song2 has right properties", () => {
        expect(song2.name).toBe("All is Well");
        expect(song2.album).toBe("Sounds Like Help");
        expect(song2.author).toBe("Austin Basham");
    });

    it("song3 has right properties", () => {
        expect(song3.name).toBe("Sounds Like Help");
        expect(song3.album).toBe("Sounds Like Help");
        expect(song3.author).toBe("Austin Basham");
    });

    it("get description of songs", () => {
        expect(song1.getDescription()).toEqual(`The name of this song is Waiting Around and it is from the album Vacancy EP. It is written by Aisha.`);
    });

    it("check if the album is equal", () => {
        expect(song2.isInSameAlbum(song3)).toBeTruthy();
    });

    
});
