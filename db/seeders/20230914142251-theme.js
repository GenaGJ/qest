'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          name: 'Ранетки',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Папины дочки',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Наша Раша',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
