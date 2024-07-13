'use strict';

const tableName = 'tb_order_pizza'
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
      order_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pizza_size_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pizza_flavor_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(table);
  }
};
