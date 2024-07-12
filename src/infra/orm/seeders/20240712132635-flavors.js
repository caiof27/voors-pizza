'use strict';

const tableName = 'tb_pizza_flavor'
const schema = 'public'
const table = { tableName, schema }

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(table, [
      {
        flavor: 'Calabresa',
        additional_time: 0
      },
      {
        flavor: 'Marguerita',
        additional_time: 0
      },
      {
        flavor: 'Portuguesa',
        additional_time: 5
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(table, null, {});
  }
};
