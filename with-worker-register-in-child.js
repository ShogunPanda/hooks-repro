const { Worker } = require("worker_threads");

new Worker("./lib/child-with-register.js");
