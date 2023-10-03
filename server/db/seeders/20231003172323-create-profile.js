'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Profiles', 
    [
      {
        user_name: 'Biba',
        user_about: 'Всем привет! Меня зовут Бида. Я обожаю теннис.',
        user_age: 21,
        user_tg: '',
        user_mobile: '',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};
