'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          userId: 1,
          postId: 1,
          commentContent: 'this test comment content',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          postId: 2,
          commentContent: 'this test comment content 2',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {})
  }
}
