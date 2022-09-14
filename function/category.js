const db = require('../db');
//Фильтрация пицц
const setCategory  = (i) => {
    return db.filter(item => item.category === i);
  }

module.exports = setCategory;