const env = require('../config/env');
const jwt = require('jsonwebtoken');

module.exports = {
  login(req, res) {
    if(req.body.user === 'luiz' && req.body.pwd === '123'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      var token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      res.status(200).send({ auth: true, token: token });
    }
    
    res.status(500).send('Login inválido!');
  },

  logout(req, res) {
    res.status(200).send({ auth: false, token: null });
  },

  verify(req, res, next) {
    const token = req.headers['x-access-token'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, env('JWT_SECRET'), (err, decoded) => {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  
      req.userId = decoded.id;
      next();
    });
  }
}