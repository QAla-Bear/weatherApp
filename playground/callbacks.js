var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Matthias'
  };
  setTimeout(() => {
    callback(user);
  }, 1000);
};


getUser(100, (user) => {
  console.log(user);
});
