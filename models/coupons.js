'use strict';
module.exports = (sequelize, DataTypes) => {
  const coupons = sequelize.define('coupons', {
    code: DataTypes.STRING,
    discount: DataTypes.STRING,
    expiry: DataTypes.DATE
  }, {});
  coupons.associate = function(models) {
    // associations can be defined here
  };
  return coupons;
};