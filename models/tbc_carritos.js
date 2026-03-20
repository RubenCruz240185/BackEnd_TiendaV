'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_carritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_carritos.init({
    id_usuario: DataTypes.STRING,
    fecha_creacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbc_carritos',
  });
  return tbc_carritos;
};