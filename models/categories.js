'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    productid: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    categories.belongsTo(models.products, {
      foreignKey: { name: 'productid', allowNull: true },
      onDelete: 'CASCADE',
    })    
  };
  return categories;
};