'use strict';

const tableName = 'tb_pizza_personalization'
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
      personalization: {
        allowNull: false,
        type: Sequelize.STRING
      },
      additional_time : {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      additional_prize: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(table);
  }
};
