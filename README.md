Repro for https://github.com/nodejs/node/issues/53182

To reproduce the issue, run the following commands:

| Command | Result in Node 22.1.0 | Result in Node 22.2.0 |
|---------|-------------|-------------|
| `node self-contained.mjs` | ✅ Prints from hooks.mjs | ✅ Prints from hooks.mjs |
| `node with-worker-register-in-import.js` | ✅ Prints from hooks.mjs | ❌ Process hangs |
| `node with-worker-register-in-child.js` | ❌ Doesn’t print from hooks.mjs | ❌ Doesn’t print from hooks.mjs |
