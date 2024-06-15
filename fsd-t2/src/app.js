const express = require('express');
const app = express();
const path = require('path');
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath,{index:"calc.html"}))
app.get('/calc', (req, res) => {``
  const response = {
    n1: req.query.number1,
    n2: req.query.number2,
    formula: req.query.formula
  };
  if (!response.n1 ||!response.n2 ||!response.formula) {
    res.send('Please enter valid numbers and select a formula.');
    return;
  }
  let result;
  switch (response.formula) {
    case 'add':
      result = parseFloat(response.n1) + parseFloat(response.n2);
      break;
    case 'sub':
      result = parseFloat(response.n1) - parseFloat(response.n2);
      break;
    case 'mul':
      result = parseFloat(response.n1) * parseFloat(response.n2);
      break;
    case 'div':
      if (parseFloat(response.n2) === 0) {
        res.send('Cannot divide by zero.');
        return;
      }
      result = parseFloat(response.n1) / parseFloat(response.n2);
      break;
    default:
      res.send('Please select a formula.');
      return;
  }
  res.send(`The result is: ${result}`);
});
app.listen(5555);