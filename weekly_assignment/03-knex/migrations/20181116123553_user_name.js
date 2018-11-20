
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_table', (table) => {
      table.increments();
      table.string('user_name');
      table.string('password');
      table.timestamps(false, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_table');
};
