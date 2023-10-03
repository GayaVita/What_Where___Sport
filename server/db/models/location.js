'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate( { Admin, Activity }) {
      this.belongsTo(Admin, { foreignKey: 'admin_id' });
      this.hasMany(Activity, {foreignKey: 'location_id'});
    }
  }
  Location.init({
    admin_id: DataTypes.INTEGER,
    location_title: DataTypes.STRING,
    location_address: DataTypes.STRING,
    location_district: DataTypes.STRING,
    location_price: DataTypes.INTEGER,
    location_photo: DataTypes.STRING,
    location_category: DataTypes.STRING,
    location_contact: DataTypes.STRING,
    coordinateX: DataTypes.STRING,
    coordinateY: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};