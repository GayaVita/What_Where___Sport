'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    static associate( { Profile, Location } ) {
      this.belongsTo(Profile, { foreignKey: 'profile_id' } );
      this.belongsTo(Location, { foreignKey: 'location_id' } );
    }
  }
  Activity.init({
    profile_id: DataTypes.INTEGER,
    activity_type: DataTypes.STRING,
    activity_date: DataTypes.DATE,
    activity_time: DataTypes.STRING,
    activity_message: DataTypes.STRING,
    location_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};