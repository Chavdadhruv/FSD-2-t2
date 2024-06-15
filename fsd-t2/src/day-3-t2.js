const express = require('express');
const app = express();
const path = require('path');

const staticpath = path.join(__dirname,'../public')
app.use(express.static(staticpath,{index:'3.html'}))
app.get('/calc', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operation = req.query.operation;

    if (!num1 || num1 <= 0 || !num2 || num2 <= 0) {
        res.send('Please enter valid numbers greater than 0.');
        return;
    }

    if (!operation) {
        res.send('You have not selected any formula.');
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                res.send('Division by zero is not allowed.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            res.send('Invalid operation selected.');
            return;
    }

    res.send(operation,num1,num2,result);
});
app.listen(5555)