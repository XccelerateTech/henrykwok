class NoteService {
    constructor(knex) {
        this.knex = knex;
    }

    listNote(user) {
        if(typeof user !== 'underfined') {
            let query = this.knex.select('notes.id', 'notes_content')
            .from('notes')
            .innerJoin('user_table', 'notes.user_id', 'user_table.id')
            .where('user_table.user_name', user);

            return query.then((rows) => {
                console.log(rows);
                return rows.map(r => ({
                    id: r.id,
                    notes_content: r.notes_content
                }))
            });
        }
    }

    addNote(note, user) {
        let query = this.knex.select('id')
        .from('user_table')
        .where('user_table.user_name', user);

        return query.then((rows) => {
            if(rows.length === 1) {
                return this.knex.insert({
                    notes_content: note,
                    user_id: rows[0].id
                }).into('notes');
            } else {
                throw new Error ('Cannot add');
            }
        });
    };

    updateNote(id, note, user) {
        let query = this.knex.select('id')
        .from('user_table')
        .where('user_table.user_name', user);

        return query.then((rows) => {
            if(rows.length === 1) {
                return this.knex('notes')
                .where('id', id)
                .update({
                    notes_content: note
                });
            } else {
                throw new Error ('Cannot update');
            }
        });
    };

    deleteNote(id, user) {
        let query = this.knex.select('id')
        .from('user_table')
        .where('user_table.user_name', user);

        return query.then((rows) => {
            if(rows.length === 1) {
                return this.knex('notes')
                .where('id', id)
                .del();
            } else {
                throw new Error ('Cannot delete');
            }
        });
    };

}

module.exports = NoteService;
