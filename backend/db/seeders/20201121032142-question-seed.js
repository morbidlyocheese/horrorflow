'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Questions', [
      {
        userId: 1,
        question: 'Can someone please explain to me the ending of the remake of Suspiria (2018)?',
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
      {
        userId: 1,
        question: 'Can someone please explain to me the ending of Let The Right One In (2008)?',
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
      {
        userId: 1,
        question: 'Can someone please explain to me the ending of The Thing (1982)?',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
      ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
