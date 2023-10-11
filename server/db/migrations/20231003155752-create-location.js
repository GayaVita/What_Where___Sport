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
        allowNull: true,
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
      location_description: {
        type: Sequelize.TEXT
      },
      coordinateX: {
        type: Sequelize.STRING
      },
      coordinateY: {
        type: Sequelize.STRING
      },
      user_id_loc: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
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