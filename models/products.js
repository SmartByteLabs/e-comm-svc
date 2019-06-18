'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    image: DataTypes.ARRAY(DataTypes.STRING),
    _like: DataTypes.INTEGER,
    comment: DataTypes.ARRAY(DataTypes.STRING),
    netamount: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    grossamount: DataTypes.INTEGER,
  }, {});
  products.associate = function(models) {
    // associations can be defined here
    products.hasMany(models.order_items, {
      foreignKey: { name: 'productid', allowNull: true },
      onDelete: 'CASCADE',
    })
    products.hasMany(models.categories, {
      foreignKey: { name: 'productid', allowNull: true },
      onDelete: 'CASCADE',
    })
    
  };
  return products;
};