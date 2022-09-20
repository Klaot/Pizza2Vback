const searchPizza = (searchName, namePizza) => {
    return namePizza.filter(item => {
        return item.title.toLowerCase().includes(searchName) 
    });
 }

 module.exports = searchPizza;