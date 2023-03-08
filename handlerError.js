function request(type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      type === 'a' ? resolve('resolve') : reject('reject');
    }, 2000);
  });
}

//handleError
async function getData() {
  let err, data;

  [err, data] = await handleRequest(request('a'));
  if (err) {
    console.log('Error request 1 :::', err);
  } else {
    console.log('data', data);
  }
}

const handleRequest = (promise) => {
  return promise
    .then((data) => [undefined, data])
    .catch((err) => [err, undefined]);
};
getData();
