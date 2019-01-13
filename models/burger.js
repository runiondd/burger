module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
      burgerName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Burgers;
  };
