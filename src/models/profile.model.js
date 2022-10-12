module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define("Profile", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING(100),
      },
      lastName: {
        type: Sequelize.STRING(100),
      },
      gender: {
        type: Sequelize.ENUM("Male", "Female", "Other"),
      },
      age: {
        type: Sequelize.INTEGER,
      },
    });
    return Profile;
  };
  