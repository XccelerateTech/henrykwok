
exports.up = function(knex, Promise) {
  return knex.schema.createTable('account', (table) => {
      table.increments();      
      table.string('account_no');
      table.string('account_balance');
      table.integer('transaction_id').unsigned().unique();
      table.foreign('transaction_id').references('transactions.id');
      table.timestamps(false, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('account');
};
