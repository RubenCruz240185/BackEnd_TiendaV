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
    id_usuario:{ 
      type: DataTypes.STRING, 
      allowNull: false
     },
    fecha_creacion:{ 
      type: DataTypes.DATE, 
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbc_carritos',
  });
  tbc_carritos.associate = function(models) {
    // Relación con tbc_usuario
    tbc_carritos.belongsTo(models.tbc_usuario, {
      foreignKey: 'id_usuario',
      as: 'tbc_usuario'
    });
    // Relación con tbc_carrito_detalle
    tbc_carritos.hasMany(models.tbc_carrito_detalle, {
      foreignKey: 'id_carrito',
      as: 'tbc_carrito_detalles'
    });
  };
  return tbc_carritos;
};