const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));
const budget = {
   myBudget : [
    {
        "title": "Eat out",
        "budget": 30
    },
    {
        "title": "Rent",
        "budget": 350
    },
    {
        "title": "Groceries",
        "budget": 90
    },
    {
       "title": "Kitchenware",
       "budget" : 110
    },
    {
        "title": "Water bill",
        "budget": 35
    },
    {
       "title": "Wifi bill",
        "budget": 40
    },
    {
        "title": "Clothes",
        "budget": 150
    }

]
};  


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.use('/budget', (req, res) => {
    res.json(budget);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});