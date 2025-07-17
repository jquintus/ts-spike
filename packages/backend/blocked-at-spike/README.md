# blocked-at

Spike for understanding how [blocked-at](https://github.com/naugtur/blocked-at) behaves

## Sample Output

```
🚀 Starting blocked-at spike
==================================================

 1️⃣ Testing non-blocking async operation:
   Starting non-blocking operation...
   ✅ Non-blocking operation completed

 2️⃣ Testing CPU-intensive blocking operation:
   Starting CPU-intensive operation...
   ✅ CPU-intensive operation completed in 4000ms (result: 1136921396967.35)
⚠️  Event loop blocked for 4000.1077919921877ms
📍 Stack trace:     at AsyncHook.init (/Users/jq/code/ts-spike/node_modules/blocked-at/index.js:31:11)
    at emitInitNative (node:internal/async_hooks:202:43)
    at emitInitScript (node:internal/async_hooks:505:3)
    at promiseInitHook (node:internal/async_hooks:324:3)
    at promiseInitHookWithDestroyTracking (node:internal/async_hooks:328:3)
    at Promise.then (<anonymous>)
    at step (/Users/jq/code/ts-spike/dist/blocked-at-spike/index.js:7:91)
    at /Users/jq/code/ts-spike/dist/blocked-at-spike/index.js:8:9
    at new Promise (<anonymous>)
    at __awaiter (/Users/jq/code/ts-spike/dist/blocked-at-spike/index.js:4:12)
    at run (/Users/jq/code/ts-spike/dist/blocked-at-spike/index.js:19:12)
    at /Users/jq/code/ts-spike/dist/index.js:17:42
    at Generator.next (<anonymous>)
    at /Users/jq/code/ts-spike/dist/index.js:8:71
    at new Promise (<anonymous>)
    at __awaiter (/Users/jq/code/ts-spike/dist/index.js:4:12)
    at main (/Users/jq/code/ts-spike/dist/index.js:16:12)
    at Object.<anonymous> (/Users/jq/code/ts-spike/dist/index.js:20:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
------------------------------

 3️⃣ Testing synchronous file operation:
   Starting sync file operation...
   ✅ Sync file write completed

 4️⃣ Testing setTimeout (non-blocking):
   Starting setTimeout operation...
   ✅ setTimeout callback executed

 5️⃣ Testing heavy computation loop:
   Starting heavy computation loop...
   ✅ Heavy computation completed in 1635ms (processed 10000000 items)

 ✅ Blocked-at spike completed
```
