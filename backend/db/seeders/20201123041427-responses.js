'use strict';
const { User, Question } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user2 = await User.findOne({
      where: {
        username: 'FakeUser1'
      }
    });

    const question1 = await Question.findOne({
      where: {
        question: 'Can someone please explain to me the ending of the remake of Suspiria (2018)?'
      }
    });
    const question2 = await Question.findOne({
      where: {
        question: 'Can someone please explain to me the ending of Let The Right One In (2008)?'
      }
    });
    const question3 = await Question.findOne({
      where: {
        question: 'Can someone please explain to me the ending of The Thing (1982)?'
      }
    });
    
    await queryInterface.bulkInsert('Responses', [
      {
        questionId: question1.id,
        userId: user2.id,
        response: 'Autem cum velit labore excepturi.',
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: question2.id,
        userId: user2.id,
        response: 'Tempore laboriosam consequuntur sit laudantium porro cum molestias. Perferendis possimus eaque iste eligendi in.',
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: question3.id,
        userId: user2.id,
        response: 'Necessitatibus aut adipisci odio culpa. Ea voluptas eveniet cum. Ab sed quia. Magni ducimus qui ad accusantium ullam possimus dolorem. Quos dolore totam.',
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Responses', null, {});
  }
};
