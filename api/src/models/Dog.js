const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    heightMin:{
      type: DataTypes.STRING,
      allowNull: false
    },
    heightMax:{
      type: DataTypes.STRING,
      allowNull: false
    },
    weightMin:{
      type: DataTypes.STRING,
      allowNull: false
    },
    weightMax:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lifeSpanMin:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lifeSpanMax:{
      type: DataTypes.STRING,
      allowNull: false
    },
    country:{
      type:DataTypes.STRING,
      allowNull :true,
      defaultValue : "Argentina"
    }
  });
};
