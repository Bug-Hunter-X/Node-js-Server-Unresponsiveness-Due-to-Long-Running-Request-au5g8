# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running request can cause the entire server to become unresponsive.  The problem stems from Node.js's single-threaded event loop.  When a request takes a long time to process, it blocks the event loop, preventing other requests from being handled. 

The `server.js` file contains the buggy code.  The `serverSolution.js` shows how to fix the issue using asynchronous operations and proper event loop management.

## How to Reproduce

1. Clone this repository.
2. Run `node server.js`.
3. Open a browser and go to `http://localhost:3000`. You'll see the response after 5 seconds.
4. While the first request is being processed, try to access `http://localhost:3000` again. You'll find that the second request will not be handled until the first request is complete.

## Solution

The solution involves avoiding blocking operations. For I/O-bound tasks (like network requests or file operations), use asynchronous operations to allow the event loop to continue processing other tasks while the long-running operation completes.