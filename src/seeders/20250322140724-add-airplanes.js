'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [{
      model_no: '747',
      capacity: 366,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      model_no: '777',
      capacity: 396,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      model_no: 'A380',
      capacity: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      model_no: 'A320',
      capacity: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      model_no: 'A330',
      capacity: 300,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      ignoreDuplicates: true
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
