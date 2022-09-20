const searchPizza = (searchName, namePizza) => {
    return namePizza.filter(item => item.title.includes(searchName));
 }

 module.exports = searchPizza;