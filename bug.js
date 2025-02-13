const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // The error is here.  The synchronous operation blocks the event loop,
  // causing the server to become unresponsive.
  const result = someLongRunningSynchronousOperation();
  res.send('Hello World!');
});

function someLongRunningSynchronousOperation() {
  // Simulates a long-running operation
  let count = 0;
  for (let i = 0; i < 1000000000; i++) {
    count++;
  }
  return count;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});