'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Activity}) {
      this.belongsTo(User, { foreignKey: 'user_id'});
      this.belongsTo(Activity, { foreignKey: 'activity_id'})
    }
  }
  Subscriber.init({
    activity_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subscriber',
  });
  return Subscriber;
};