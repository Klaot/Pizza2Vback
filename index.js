const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./db');
const setSort = require('./function/sort');
const setCategory = require('./function/category');
const searchPizza = require('./function/search');


dotenv.config();
let port = process.env.PORT || 3001
app.use(cors());
app.options('*', cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/:id', cors() ,(req, res) => {
    let sortId = +req.query.sortType;
    let sortedPizzas = req.params.id === "0" ? db : setCategory(+req.params.id);
    let newSortedPizzas = setSort(sortId,sortedPizzas);
    let searchString = req.query.search;
    let searchedPizzas = searchString === '' ? newSortedPizzas : searchPizza(searchString, newSortedPizzas); 
    res.send(JSON.stringify(searchedPizzas));
});

app.get('/pizzas/:id', (req, res) => {
    let idPizza = +req.params.id
    const findPizzaId = (id) => {
        return db.find(item => item.id === id)
    }
    let foundedId = findPizzaId(idPizza)
    res.send(JSON.stringify(foundedId));
})

app.listen(port, (err, res) => {
    console.log('Server Started');
});