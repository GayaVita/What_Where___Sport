'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Profile.init(
    {
      user_name: DataTypes.STRING,
      user_about: DataTypes.STRING,
      user_age: DataTypes.INTEGER,
      user_tg: DataTypes.STRING,
      user_mobile: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      user_photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Profile',
    },
  );
  return Profile;
};
