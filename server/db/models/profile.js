'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate( { User, Activity, Location }) {
      this.hasOne(User, { foreignKey: 'user_id' } );
      this.hasMany(Activity, { foreignKey: 'profile_id' } );
      this.hasMany(Location, { foreignKey: 'profile_id_loc' } );
    }
  }
  Profile.init({
    user_name: DataTypes.STRING,
    user_about: DataTypes.STRING,
    user_age: DataTypes.INTEGER,
    user_tg: DataTypes.STRING,
    user_mobile: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};


