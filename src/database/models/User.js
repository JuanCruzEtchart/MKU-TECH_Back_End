module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let cols = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(30),
      allowNull: false,
      unique: { args: true, msg: "El usuario ya existe!" },
    },
    password: { type: dataTypes.STRING(300), allowNull: false },
    admin_status: { type: dataTypes.INTEGER(1), allowNull: true },
    /*     created_at: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: true,
    },
    updated_at: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
      allowNull: true,
    }, */
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "users",
  };
  const User = sequelize.define(alias, cols, config);

  User.associate = (models) => {
    User.hasMany(models.Fleet, { as: "fleet", foreignKey: "user_id" });
  };

  return User;
};
