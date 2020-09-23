exports.up = function(knex) {
    return knex.schema.createTable('specs', tbl => {
        tbl.increments('id');
        tbl.string('vin',128).unique().notNullable();
        tbl.string('make',128).notNullable();
        tbl.string('model',128).notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('transmission_type',128);
        tbl.string('title',128);
    })
  };
  
  exports.down = function(knex) {
      knex.schema.dropTableIfExists('specs')
  };