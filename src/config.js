const os = require("os")

const config = {
    // runMode: "dev",
    runMode: "test",
    // runMode: "prod",

    objectClient: {
        hostname: os.hostname()
    },
    frameRate: 60,
    scaleFactor: 15,
    colorContrast: 20,
}

switch (config.runMode) {
    case "dev":
        config.ip = "http://localhost:80";
        break;

    case "test":
        config.ip = "http://tank.nwe.li:80";
        break;

    case "prod":
        config.ip = "http://tank.nwe.li:80";
        break;
}

module.exports = config;