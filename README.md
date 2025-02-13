# Express.js Server Unresponsiveness: Synchronous Operation Blocking Event Loop

This repository demonstrates a common issue in Express.js applications where a synchronous operation within a route handler blocks the event loop, causing the server to become unresponsive.  The problem is that synchronous operations prevent other requests from being processed until the long-running operation completes.

## Bug

The `bug.js` file contains an Express.js application with a route handler that performs a long-running synchronous operation.  This operation blocks the event loop, preventing the server from responding to subsequent requests.

## Solution

The `bugSolution.js` file demonstrates the correct approach to handle such situations.  It uses asynchronous operations and promises or async/await to prevent blocking the event loop.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install`.
4. Run `node bug.js` (the buggy server).
5. Make a request to the server.  Note that additional requests will likely hang.
6. Stop the server and run `node bugSolution.js` (the corrected server).
7. Test again. The server should respond normally, even with multiple concurrent requests.