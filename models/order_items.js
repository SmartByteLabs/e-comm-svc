'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_items = sequelize.define('order_items', {
    productid:DataTypes.INTEGER,
    orderid: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    netamount: DataTypes.INTEGER,
    grossamount: DataTypes.INTEGER,
}, {});
  order_items.associate = function(models) {
    // associations can be defined here
    order_items.belongsTo(models.products, {
      foreignKey: { name: 'productid', allowNull: true },
      onDelete: 'CASCADE',
    })
    order_items.belongsTo(models.orders, {
      foreignKey: { name: 'orderid', allowNull: true },
      onDelete: 'CASCADE',
    })
  };
  return order_items;
};