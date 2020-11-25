'use strict';

const { User } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });

    await queryInterface.bulkInsert('Questions', [
      {
        userId: user1.id,
        question: 'Can someone please explain to me the ending of the remake of Suspiria (2018)?',
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: user1.id,
        question: 'Can someone please explain to me the ending of Let The Right One In (2008)?',
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: user1.id,
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
