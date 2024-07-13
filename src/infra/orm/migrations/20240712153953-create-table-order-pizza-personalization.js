'use strict';

const tableName = 'tb_order_pizza_personalization'
const schema = 'public'
const table = { tableName, schema }

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_pizza_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pizza_personalization_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(table);
  }
};
