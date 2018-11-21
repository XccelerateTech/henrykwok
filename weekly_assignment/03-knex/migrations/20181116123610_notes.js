
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', (table) => {
      table.increments();
      table.string('notes_content');
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('user_table.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
