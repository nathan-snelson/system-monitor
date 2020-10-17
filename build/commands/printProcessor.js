"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("os");
var cpu = os.cpus();
var machine = os.hostname();
function showProcessor() {
    console.log("CPU Details for " + machine + ":");
    console.log(cpu);
}
exports.showProcessor = showProcessor;
