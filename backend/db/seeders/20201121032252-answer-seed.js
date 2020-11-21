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
    await queryInterface.bulkInsert('Answers', [
      {
        questionId: 1,
        userId: 2,
        answer: 'Autem cum velit labore excepturi.',
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 2,
        userId: 2,
        answer: 'Tempore laboriosam consequuntur sit laudantium porro cum molestias. Perferendis possimus eaque iste eligendi in.',
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 3,
        userId: 2,
        answer: 'Necessitatibus aut adipisci odio culpa. Ea voluptas eveniet cum. Ab sed quia. Magni ducimus qui ad accusantium ullam possimus dolorem. Quos dolore totam.',
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
