
exports.up = function(knex, Promise) {
  return knex.schema.createTable('transactions', (table) => {
      table.increments();
      table.date('traansaction-date');
      table.string('name');
      table.string('transaction-amount');
      table.integer('card_id').unsigned().unique();
      table.foreign('card_id').references('card.id');
      table.timestamps(false, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('transactions');
};
