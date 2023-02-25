const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Model2', {
      // aca van las propiedades del modelo
      
    }, {timestamps:false});
  };