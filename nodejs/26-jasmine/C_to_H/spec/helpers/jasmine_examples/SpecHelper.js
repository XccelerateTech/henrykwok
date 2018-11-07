beforeEach(function () {
    jasmine.addMatchers({
        toBeInTheSameAlbums: function () {
            return {
                compare: function(currentSong, otherSong) {

                    return {
                        pass: currentSong.album === otherSong.album
                    }
                }
            };
        }
    });
});