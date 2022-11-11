const os = require("os")

const config = {
    ip:'http://90.54.40.219:80'
}

function getUserData() {
    let objectClient = {
        hostname: os.hostname()
      }
    return objectClient
}

module.exports = {config,getUserData};