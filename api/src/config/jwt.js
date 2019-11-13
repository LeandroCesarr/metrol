const env = require('./env');
const jwt = require('jsonwebtoken');

module.exports = {
  secret: env('JWT_SECREt'),
  async generateToken(params = {}) {
    return await jwt.sign(params, env('JWT_SECREt'), {
      expiresIn: 86400,
    });
  }
}