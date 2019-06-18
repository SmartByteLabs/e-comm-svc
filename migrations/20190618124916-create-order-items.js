'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model : "products",
          key: "id",
        },
      },
      orderid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model : "orders",
          key: "id",
        },
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      netamount: {
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
    return queryInterface.dropTable('order_items');
  }
};