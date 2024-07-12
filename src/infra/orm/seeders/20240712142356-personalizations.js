'use strict';

const tableName = 'tb_pizza_personalization'
const schema = 'public'
const table = { tableName, schema }

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(table, [
      {
        personalization: 'Extra Bacon',
        additional_time: 0,
        additional_prize: 3.0
      },
      {
        personalization: 'Sem Cebola',
        additional_time: 0,
        additional_prize: 0
      },
      {
        personalization: 'Borda Recheada',
        additional_time: 5,
        additional_prize: 5.0
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(table, null, {});
  }
};
