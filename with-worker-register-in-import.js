const { Worker } = require("worker_threads");

new Worker("./lib/child.js", {
  execArgv: ["--import", "./lib/register.js"],
});
