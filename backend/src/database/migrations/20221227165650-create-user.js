'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER(11).ZEROFILL,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phoneNumber: Sequelize.STRING,
      mobile: Sequelize.STRING,
      departament: Sequelize.STRING,
      verificationCode: Sequelize.STRING,
      emailChecked: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cashforceAdm: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0
      }
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users');
   
  }
};
