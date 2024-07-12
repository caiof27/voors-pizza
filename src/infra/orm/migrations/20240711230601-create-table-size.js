'use strict';

const sequelize = require('sequelize');

const tableName = 'tb_pizza_size'
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
      size: {
        allowNull: false,
        type: Sequelize.STRING
      },
      prize: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      cooking_time : {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(table);
  }
};
