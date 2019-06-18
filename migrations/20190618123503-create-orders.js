'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model : "users",
          key: "id",
        },
      },
      addressid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model : "addresses",
          key: "id",
        },
      },
      mobile: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      altmobile: {
        type: Sequelize.STRING(10),
      },
      email: {
        type : Sequelize.STRING(50),
      },
      totalnetamount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totalgrossamount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totaldiscount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      paidamount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      tax: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      deliverycharges: {
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
    return queryInterface.dropTable('orders');
  }
};