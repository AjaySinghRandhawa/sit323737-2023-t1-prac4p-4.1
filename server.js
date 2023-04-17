const express = require('express');
const app = express();

// Routes for addition, subtraction, multiplication, and division
app.get('/add',  (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) { // Is not a number check
    res.status(400).send('Invalid input');
  } else {
    const result = num1 + num2;
    res.send(result.toString());
  }
});

app.get('/subtract',  (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input');
  } else {
    const result = num1 - num2;
    res.send(result.toString());
  }
});

app.get('/multiply',  (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input');
} else {
    const result = num1 * num2;
    res.send(result.toString());
  }
});

app.get('/divide',  (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid input');
    } else if (num2 === 0) { // Check for divide by 0 err
        res.status(400).send('Cannot divide by zero');
    } else {
        const result = num1 / num2;
        res.send(result.toString());
    }
});


// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});