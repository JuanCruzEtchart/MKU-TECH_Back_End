module.exports = (sequelize, dataTypes) => {
  let alias = "Fleet";
  let cols = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    latitude: { type: dataTypes.STRING(120), allowNull: false },
    longitude: { type: dataTypes.STRING(120), allowNull: false },
    door_status: { type: dataTypes.INTEGER(1), allowNull: false },
    vehicle_plate: {
      type: dataTypes.STRING(20),
      allowNull: false,
      unique: { args: true, msg: "El vehículo ya existe!" },
    },
    user_id: { type: dataTypes.INTEGER(1), allowNull: false },
    /*     created_at: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updated_at: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
      allowNull: false,
    }, */
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "fleets",
  };
  const Fleet = sequelize.define(alias, cols, config);

  Fleet.associate = (models) => {
    Fleet.belongsTo(models.User, { as: "user", foreignKey: "user_id" });
  };

  return Fleet;
};
