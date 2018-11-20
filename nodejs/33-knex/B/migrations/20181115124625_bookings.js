
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bookings', (table) => {
      table.increments();
      table.date("date");
      table.string("remark");
      table.timestamp(false, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bookings');
};
