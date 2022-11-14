const { userStore } = require('./storeProvider');

const welcomeMessage = () => {
    const {name} = userStore;
    console.log('Good morning, ' + name + '!');
};

welcomeMessage();
