const NoteService = require('../NoteService');
const fs = require('fs');


describe('testing NoteService', function(){
    beforeEach(function(){
        if(fs.existsSync('test.json')) {
            fs.unlinkSync('test.json');
        }
        fs.writeFileSync('test.json', '[]');
    });

    it('list the notes using listNote()', function(done){
        const noteService = new NoteService('test.json');
        noteService.listNote().then((result) => {
            expect(result).toEqual([]);
            done();
        }).catch((err) => {
            done.fail(err);
        });
    });

    it('add a note using addNote()', function(done){
        const noteService = new NoteService('test.json');
        noteService.addNote("test").then(() => {
            return noteService.listNote();
        }).then((result) => {
            expect(result).toEqual(["test"]);
            done();
        }).catch((err) => {
            done.fail(err);
        });
    });

    it('add more than one note', function(done){
        const noteService = new NoteService('test.json');
        noteService.addNote("testing").then(()=>{
            return noteService.addNote("super").then(()=>{
                return noteService.listNote();
            })
        }).then((result) => {
            expect(result).toEqual(["testing", "super"]);
            done();
        }).catch((err) => {
            done.fail(err);
        });
    });

    it('add notes before listing notes, while having the previous notes', function(done){
        const noteService = new NoteService('test.json');
        noteService.addNote("test").then(()=>{
            const noteService2 = new NoteService('test.json');
            return noteService2.addNote('test2').then(() => {
                return noteService2.listNote();
            }).then((result) => {
                expect(result).toEqual(['test', 'test2']);
                done();
            }).catch((err)=>{
                done.fail(err);
            }).catch((err)=>{
                done.fail(err);
            });
        });
    });
})