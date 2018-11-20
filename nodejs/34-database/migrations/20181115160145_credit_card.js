
exports.up = function(knex, Promise) {
  return knex.schema.createTable('card', (table) => {
      table.increments();
      table.string('name');
      table.string('HKID');
      table.string('bank_name');
      table.string('credit_card_name');      
      table.timestamps(false, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('card');
};
