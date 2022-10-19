const { expressjwt: expressJWT } = require('express-jwt')

module.exports = expressJWT({
  secret: 'gama-2022',
  algorithms: ['HS256']
})
