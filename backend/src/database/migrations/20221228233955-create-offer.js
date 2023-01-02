'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER(11).ZEROFILL,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      tax: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tariff: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adValorem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      float: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      iof: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paymentStatusSponsor: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0
      },
      paymentStatusProvider: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0
      },
      orderId: {
        type: Sequelize.INTEGER(11).ZEROFILL,
        references: {
          model: 'orders',
          key: 'id',
        }
      },
      sponsorId: {
        type: Sequelize.INTEGER(11).ZEROFILL,
        references: {
          model: 'sponsors',
          key: 'id',
        }
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('offers');
  }
};
