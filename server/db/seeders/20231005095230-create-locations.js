/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Locations',

      [
        {
          admin_id: null,

          location_title: 'Просторный уличный корт',

          location_address: 'ул. Варваринская, д. 29',

          location_district: 'г. Москва, Юго-Западная',

          location_price: 1000,

          location_photo:
            'https://www.sport-pl.ru/images/editor/444/10.01.20/Pyatigorsk.jpg',

          location_category: 'Теннисный корт',

          location_contact: '+7 (916) 147-82-42',

          coordinateX: null,

          coordinateY: null,

          profile_id_loc: 1,

          createdAt: new Date(),

          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
