'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Admins',
          },
          key: 'id',
        },
      },
      location_title: {
        type: Sequelize.STRING
      },
      location_address: {
        type: Sequelize.STRING
      },
      location_district: {
        type: Sequelize.STRING
      },
      location_price: {
        type: Sequelize.INTEGER
      },
      location_photo: {
        type: Sequelize.STRING
      },
      location_category: {
        type: Sequelize.STRING
      },
      location_contact: {
        type: Sequelize.STRING
      },
      coordinateX: {
        type: Sequelize.STRING
      },
      coordinateY: {
        type: Sequelize.STRING
      },
      profile_id_loc {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Profiles',
          },
          key: 'id',
        },
      }
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Locations');
  }
};