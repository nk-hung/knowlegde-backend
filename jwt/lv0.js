// usually

const JWT = require('jsonwebtoken');

const secretKey = 'avav';

const token = JWT.sign({ user_id: 1 }, secretKey, {
  expiresIn: '1h',
});

console.log(`Token:::`, token);

JWT.verify(token, secretKey, (err, decode) => {
  console.log('decode', decode);
});
