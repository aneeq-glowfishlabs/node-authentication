module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Must be a valid email address",
        },
      },
    },
    firebaseUid: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING(16),
      allowNull: true,
    },
    role: {
      type: Sequelize.STRING(20),
      allowNull: false,
      default: "user",
    },
  });
  return User;
};
