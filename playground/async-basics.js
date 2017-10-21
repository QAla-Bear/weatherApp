console.log('Starting app...');

setTimeout(() => {
  console.log('Inside of call back...');
}, 2000);

setTimeout(() => {
  console.log('Second timeout with 0ms delay...');
}, 0)

console.log('Finishing up...');
