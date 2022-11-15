const config = require('./config');
const repository = require('./repository');

const io = require("socket.io-client");

const socket = io(config.ip);

socket.emit('user data', config.objectClient);

socket.on('id', id => {
    repository.id = id;
});

socket.on('state', state => {
    repository.update(state);
});

module.exports = socket;