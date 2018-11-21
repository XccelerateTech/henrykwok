const express = require("express");

class NoteRouter {

    constructor(noteService) {
        this.noteService = noteService;
    }

    router() {
        let router = express.Router();

    router.get("/", (req, res) => {
        return this.noteService.listNote(req.auth.user)
            .then((notes) => res.json(notes))
            .catch((err) => res.status(500).json(err));
    })

    router.post('/', (req, res) => {
        console.log('shit', req.body.note);
        console.log('fuck', req.auth.user)
        return this.noteService.addNote(req.body.note, req.auth.user)
            .then(() => this.noteService.listNote(req.auth.user))
            .then((notes) => res.json(notes))
            .catch((err) => res.status(500).json(err));
    })

    router.put('/:id', (req, res) => {
        return this.noteService.updateNote(req.params.id, req.body.note, req.auth.user)
            .then(() => this.noteService.listNote(req.auth.user))
            .then((notes) => res.json(notes))
            .catch((err) => res.status(500).json(err));
    })

    router.delete('/:id', (req, res) => {
        return this.noteService.deleteNote(req.params.id, req.auth.user)
            .then(() => this.noteService.listNote(req.auth.user))
            .then((notes) => res.json(notes))
            .catch((err) => res.status(500).json(err));
    })

        return router;
    }
}

module.exports = NoteRouter;