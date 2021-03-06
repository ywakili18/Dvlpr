'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          userName: 'testUser1',
          email: 'testUser1@test.com',
          passwordDigest: 'testPassword1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'testUser2',
          email: 'testUser2@test.com',
          passwordDigest: 'testPassword2',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
