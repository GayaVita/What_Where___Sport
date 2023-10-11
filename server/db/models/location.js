'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate( { Admin, Activity, User }) {
      this.belongsTo(Admin, { foreignKey: 'admin_id' });
      this.hasMany(Activity, {foreignKey: 'location_id'});
      this.belongsTo(User, {foreignKey: 'user_id_loc'});
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
    location_description: DataTypes.TEXT,
    user_id_loc: DataTypes.INTEGER,
    coordinateX: DataTypes.STRING,
    coordinateY: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};