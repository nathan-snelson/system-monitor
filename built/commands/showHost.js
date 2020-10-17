"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("os");
var machine = os.hostname();
function showHost() {
    console.log("Hostname: " + machine);
}
exports.showHost = showHost;
