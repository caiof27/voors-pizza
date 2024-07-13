'use strict';

const tableName = 'tb_pizza_size'
const schema = 'public'
const table = { tableName, schema }

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(table, [
      {
        size: 'Pequena',
        prize: 20.20,
        cooking_time: 15
      },
      {
        size: 'Média',
        prize: 30.30,
        cooking_time: 20
      },
      {
        size: 'Grande',
        prize: 40.00,
        cooking_time: 25
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(table, null, {});
  }
};
