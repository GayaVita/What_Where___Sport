'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Profile, Location, Activity }) {
      // this.belongsTo(Profile);
      this.hasOne(Profile, {foreignKey: 'user_id'});
      this.hasMany(Location, { foreignKey: 'user_id_loc'});
      this.hasMany(Activity, { foreignKey: 'user_id'})
    }
  }
  User.init(
    {
      login: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    { sequelize, modelName: 'User' },
  );
  return User;
};
