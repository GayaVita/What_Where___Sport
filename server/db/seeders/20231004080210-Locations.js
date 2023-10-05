'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Locations', 
    [
      {
        admin_id: 1,
        location_title: 'Просторный уличный корт',
        location_address: 'ул. Варваринская, д. 29',
        location_district: 'г. Москва, Юго-Западная',
        location_price: 1000,
        location_photo: 'https://www.sport-pl.ru/images/editor/444/10.01.20/Pyatigorsk.jpg',
        location_category: 'Теннисный корт',
        location_contact: '+7 (916) 147-82-42',
        coordinateX: null,
        coordinateY: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        admin_id: 1,
        location_title: 'Футбольный манеж "Олимп"',
        location_address: 'ул. Гагарина, д. 311',
        location_district: 'г. Москва, ЗАО',
        location_price: 3500,
        location_photo: 'https://sxodim.com/uploads/posts/2022/11/21/optimized/7e96f365ccbc967121b7ad97db82b6b9_1400x790-q-85.jpg',
        location_category: 'Футбольное поле',
        location_contact: '+7 (917) 148-85-40',
        coordinateX: null,
        coordinateY: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        admin_id: 1,
        location_title: 'Ледовая арена "City Sport"',
        location_address: 'ул. Паустовского, д. 4',
        location_district: 'г. Москва, ЮАО',
        location_price: 7000,
        location_photo: 'https://стадион-знамя.рф/wp-content/uploads/2021/07/5-1024x665.jpeg',
        location_category: 'Ледовая арена',
        location_contact: '+7 (918) 158-50-40',
        coordinateX: null,
        coordinateY: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        admin_id: 1,
        location_title: 'Футбольная поле "Курчатовец"',
        location_address: 'ул. Рогова, д. 1, строение 1 ',
        location_district: 'г. Москва, СЗАО',
        location_price: 3000,
        location_photo: 'https://www.sport-pl.ru/images/editor/catalog/grass/football/Vladstpoi_001.jpg',
        location_category: 'Футбольное поле',
        location_contact: '+7 (916) 147-82-42',
        coordinateX: null,
        coordinateY: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        admin_id: 1,
        location_title: 'Теннисный корт "Tennis Point"',
        location_address: 'ул. Дубнинская, д. 71',
        location_district: 'г. Москва, САО',
        location_price: 3500,
        location_photo: 'https://photobooth.cdn.sports.ru/preset/wysiwyg/2/97/b83e5dff14524842c7820233a4eee.jpeg',
        location_category: 'Теннисный корт',
        location_contact: '+7 (916) 157-83-43',
        coordinateX: null,
        coordinateY: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  }
};
