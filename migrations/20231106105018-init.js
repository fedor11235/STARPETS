'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, { DataTypes }) =>
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      balance: DataTypes.INTEGER,
    }),
  down: (queryInterface) => queryInterface.dropTable('Users'),
};
