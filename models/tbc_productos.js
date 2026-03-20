'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_productos.init({
    nombre:{ 
      type: DataTypes.STRING(100), 
      allowNull: false },
    descripcion: { 
      type: DataTypes.STRING(255), 
      allowNull: true },
    precio: { 
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false },
    stock: { 
      type: DataTypes.INTEGER, 
      allowNull: false, defaultValue: 0 },
    id_categoria: { 
      type: DataTypes.STRING, 
      allowNull: false }
  }, {
    sequelize,
    modelName: 'tbc_productos',
  });
  tbc_productos.associate = function(models) {
    // Relación con tbc_categorias
    tbc_productos.belongsTo(models.tbc_categorias, 
      {
      foreignKey: 'id_categoria',
      as: 'tbc_categorias'
    });
  };
  return tbc_productos;
};