// 'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER(11).ZEROFILL,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: Sequelize.STRING,
      orderFileName: Sequelize.STRING,
      orderOriginalName: Sequelize.STRING,
      emissionDate: Sequelize.STRING,
      pdfFile: Sequelize.STRING,
      emitedTo: Sequelize.STRING,
      nNF: Sequelize.STRING,
      CTE: Sequelize.STRING,
      value: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cnpjId: {
        type: Sequelize.INTEGER(11).ZEROFILL,
        references: {
          model: 'cnpjs',
          key: 'id',
        }
      },
      userId: {
        type: Sequelize.INTEGER(11).ZEROFILL,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      buyerId: {
        type: Sequelize.INTEGER(11).ZEROFILL,
        references: {
          model: 'buyers',
          key: 'id',
        }
      },
      providerId: {
        type: Sequelize.INTEGER(11).ZEROFILL,
        references: {
          model: 'providers',
          key: 'id',
        }
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0',
        allowNull: false
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0',
        allowNull: false
      },
      deliveryReceipt: Sequelize.STRING,
      cargoPackingList: Sequelize.STRING,
      deliveryCtrc: Sequelize.STRING,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
