const express = require("express");

class NoteRouter {

    constructor(noteService) {
        this.noteService = noteService;
    }

    router() {
        let router = express.Router();

    router.get("/", (req, res) => {
        return this.noteService.listNote(req.auth.user)
            .then((note) => res.json(note))
            .catch((err) => res.status(500).json(err));
    })

    router.post('/', (req, res) => {
        return this.noteService.addNote(req.body.note, req.auth.user)
            .then(() => this.noteService.listNote())
            .then((note) => res.json(note))
            .catch((err) => res.status(500).json(err));
    })

    router.delete('/:id', (req, res) => {
        return this.noteService.deleteNote(req.params.id, req.auth.user)
            .then(() => this.noteService.listNote(req.auth.user))
            .then((note) => res.json(note))
            .catch((err) => res.status(500).json(err));
    })

        return router;
    }
}

module.exports = NoteRouter;