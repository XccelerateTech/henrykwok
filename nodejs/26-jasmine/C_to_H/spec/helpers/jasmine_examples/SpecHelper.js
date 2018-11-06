beforeEach(function () {
    jasmine.addMatchers({
        tobeInTheSameAlbumAs: function () {
            return {
                comapre: function(currentSong, otherSong) {
                    return{
                        pass: currentSong.album === otherSong.album
                    }
                }
            };
        }
    });
});