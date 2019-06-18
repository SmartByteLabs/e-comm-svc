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
  };
  return order_items;
};