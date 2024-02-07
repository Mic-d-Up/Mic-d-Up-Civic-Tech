/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('comments', (table) => {
  table.increments();
  table.integer("user_id").notNullable();
  table.foreign("user_id").references("id").inTable("users");
//   table.integer("post_id").notNullable();
//   table.foreign("post_id").references("id").inTable("posts");
  table.text("content").notNullable();
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('comments');