var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      } else {
        reject('Arguments must be numbers.');
      }
    }, 1500);

  });
};

asyncAdd(4, 7).then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 11);
}, (errorMessage) => {
  console.log(errorMessage)
}).then((res) => {
  console.log("Chained callback success. " + res);
}, (errorMessage) => {
  console.log("Chained callback fail. " + errorMessage);
});

/*var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('Hey, it worked..');
    reject("Unable to do anything. Reject!");
  }, 2500);
});

somePromise.then((message) => {
  console.log("success: ", message);
}, (errorMessage) => {
  console.log('Errorrr: ', errorMessage);
})
*/
