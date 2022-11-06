const {UserStore, Rectangle} = require('./UserStore');

// extremely basic data store
userStore = new UserStore(1, 'Saul Goodman', 'Albuquerque');

exports.userStore = userStore;
