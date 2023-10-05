'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Profile }) {
      // this.belongsTo(Profile);
      this.belongsTo(Profile, {foreignKey: 'user_id'});
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
