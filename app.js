const fs = require("fs");

function myLog(message) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync("logs.txt", `[${timestamp}] ${message}\n`);
}

// Usage
myLog("");