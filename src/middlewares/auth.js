const { expressjwt: expressJWT } = require('express-jwt')
// const secret = require('../configs/secret')

module.exports = expressJWT({
  secret: 'gama-2022',
  algorithms: ['HS256']
})
