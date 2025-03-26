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
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Netaji Subhas Chandra Bose International Airport',
        address: 'Jessore Rd, Dum Dum, Kolkata, West Bengal 700052, India',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        address: 'Airport Rd, New Delhi, Delhi 110037, India',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mangalore International Airport',
        address: 'Bajpe, Karnataka 574142, India',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kempegowda International Airport',
        address: 'KIAL Rd, Devanahalli, Bengaluru, Karnataka 560300, India',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysore Airport',
        address: 'Mysore, Karnataka 570007, India',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        address: 'Mumbai, Maharashtra 400099, India',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kozhikode International Airport',
        address: 'Calicut Airport P.O, Calicut, Malappuram, Kerala 673647, India',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {
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
