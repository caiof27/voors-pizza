'use strict';

const sequelize = require('sequelize');

const tableName = 'tb_pizza_flavor'
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
      flavor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      additional_time : {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(table);
  }
};
