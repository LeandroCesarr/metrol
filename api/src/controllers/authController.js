const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/jwt');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.send({ status: 401, error: 'No token provided' });
  }

  const parts = authHeader.split(' ');

  if (!parts.length === 2) {
    res.send({ status: 401, error: 'Token error' });
  }

  const [ scheme, token ] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    res.send({ status: 401, error: 'Token malformatted' });
  }

  try {
    const response = await jwt.verify(token, jwtSecret.secret);
    req.repairShop = response.repairShop;
    next();
  } catch (err) {
    res.send(err);
  }
}