'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        balance: 10000,
      },
    ])
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Users', null, {}),
}