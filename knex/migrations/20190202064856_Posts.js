exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', t => {
    t.increments('id').primary();
    t.text('content').notNullable();
    t.integer('user_id').notNullable().references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};
