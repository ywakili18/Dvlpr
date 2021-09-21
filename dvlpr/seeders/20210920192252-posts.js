'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'posts',
      [
        {
          userId: 3,
          postContent: 'this is post content',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          postContent: 'this is post content 2',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {})
  }
}
