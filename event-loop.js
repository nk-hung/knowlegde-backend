// const net = require('node:net');
// const server = net
//   .createServer(() => {
//     console.log('server');
//   })
//   .listen(8080);

setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

new Promise((reslove, reject) => {
  reslove();
  console.log('resolve');
}).then(() => {
  console.log('promise');
});
console.log('T1');

process.nextTick((_) => {
  console.log('next tick');
});
let count = 0;

// server.on('connection', (conn) => {
//   console.log(connection);
// });

// server.on('close', () => {
//   console.log('close');
// });

// This case not within an I/O cycle => the order in which the two timers are executed is non-deterministic.
// setImmediate(() => {
//   console.log('immediate');
// });
// setTimeout(() => {
//   console.log('timeout');
// }, 0);

// Case within an I/O cycle => setImmediate allways run first.
