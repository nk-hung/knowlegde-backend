// Sử dụng thuật toán bất đối xứng trong JWT

// Create for user two keys: private-key & public-key

'use strict';

const JWT = require('jsonwebtoken');

// use crypto package in node v.19
const crypto = require('node:crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096,
});

console.log({ privateKey, publicKey });

// after that use privateKey to encryt token
const token = JWT.sign({ user_id: 1 }, privateKey, {
  // must use RSA algorithm
  algorithm: 'RS256',
  expiresIn: '1h',
});

console.log(`Token ::: ${token}`);

// publicKey used to store in db => Question: how to use with refresh token?
// why sign by privateKey but verify use publicKey => crypto generates a asymmetric algorithm (thuat toan bat doi xung)
JWT.verify(token, publicKey, (err, decode) => {
  console.log('Decode :::', decode);
});
