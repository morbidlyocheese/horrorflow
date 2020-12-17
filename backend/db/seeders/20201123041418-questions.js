'use strict';

const { User } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
    const user4 = await User.findOne({
      where: {
        username: 'horrorking'
      }
    });
    const user3 = await User.findOne({
      where: {
        username: 'theymademedoit'
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
        userId: user4.id,
        question: 'Can someone please explain to me the ending of The Thing (1982)?',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: user4.id,
        question: 'I know most people aren\'t fans of remakes, since most often they tend to be bad. But does anyone think there are some remakes that aren\'t bad, or worth watching?',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: user1.id,
        question: 'Is Donnie Darko considered horror or no? I would like to hear opinions on both sides!',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: user1.id,
        question: 'Out of the entire Nightmare On Elm Street series, which is your favorite and why?',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: user4.id,
        question: 'What movie as a child terrified you to death and might consider a "horror" film to a kid? For me I would probably say The Witches. It was pretty unnerving to watch as a kid.',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: user1.id,
        question: 'Are there any old horror films you think might be worthy of a remake or re-imagining? I know remakes tend to be frowned upon, but I still kind of think some older films might be good if they were updated to be more modern while still keeping the source materials idea somewhat intact. I think most candidates for this might be films that had a lot of practical effects that may benefit from updated effects, whether it was new ways to make costumes/gore things, or adding in a hint of CGI.',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: user1.id,
        question: 'What is everyone\'s opinion on using CGI over practical effects? Personally I feel like practical and CGI CAN work together, but to solely rely on CGI can make the film lose a lot of its realism or effect. It feels like more and more horror is converting from practical to CGI. I don\'t know if it is a cost thing, but I just feel like CGI isn\'t worth it half the time. It is not very common for the CGI to look better, or good enough to justify using it over practical effects, at least to me.',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: user3.id,
        question: 'What is one horror film that REALLY stuck out to you in recent years, that maybe should have more recognition?',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: user3.id,
        question: 'What horror film would you say really changed your life? It doesn\'t have to be the first film you saw or anything. It can be anything that you just feel may have changed horror for/to you.',
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
