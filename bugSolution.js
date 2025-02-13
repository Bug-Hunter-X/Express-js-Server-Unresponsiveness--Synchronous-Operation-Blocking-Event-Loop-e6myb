const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const result = await someLongRunningAsynchronousOperation();
    res.send(`Hello World! Result: ${result}`);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

async function someLongRunningAsynchronousOperation() {
  return new Promise((resolve, reject) => {
    //Simulates a long running asynchronous operation
    setTimeout(() => {
      let count = 0;
      for (let i = 0; i < 1000000000; i++) {
        count++;
      }
      resolve(count);
    }, 0);
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});