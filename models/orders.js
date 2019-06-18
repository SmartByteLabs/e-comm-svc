'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    userid: DataTypes.INTEGER,
    addressid: DataTypes.INTEGER,
    mobile: DataTypes.STRING,
    altmobile: DataTypes.STRING,
    email: DataTypes.STRING,
    totalnetamount: DataTypes.INTEGER,
    totalgrossamount: DataTypes.INTEGER,
    totaldiscount:DataTypes.INTEGER,
    paidamount:DataTypes.INTEGER,
    tax:DataTypes.INTEGER,
    deliverycharges:DataTypes.INTEGER,
}, {});
  orders.associate = function(models) {
    // associations can be defined here
    orders.belongsTo(models.users, {
      foreignKey: { name: 'userid', allowNull: true },
      onDelete: 'CASCADE',
    })
    orders.belongsTo(models.address, {
      foreignKey: { name: 'addressid', allowNull: true },
      onDelete: 'CASCADE',
    })
  };
  return orders;
};