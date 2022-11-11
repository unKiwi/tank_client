const config = require('./config');
const data = require('./data');

const { io } = require("socket.io-client");

const socket = io(config.ip);

socket.emit('user data', config.objectClient);

socket.on('id', id => {
    data.id = id;
});

socket.on('state', state => {
    data.serverState = state;
});

module.exports = socket;