const env = require('./env');

module.exports = {
  secret: env('JWT_SECREt'),
  getToken(bearer) {
    return
  }
}