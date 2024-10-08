'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      image: {
        type: Sequelize.JSONB,
      },
      _like: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      comment: {
        type: Sequelize.JSONB,
      },
      netamount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      grossamount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};