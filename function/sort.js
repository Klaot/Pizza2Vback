//Сортировка пицц
const setSort = (idSort, filterPizzas) => {
    let sortedPizzas;
     switch(idSort) {
        case 0: 
          sortedPizzas = filterPizzas.sort((a,b) => {
          return a.rating - b.rating;
        });
        break;
        case 1: 
          sortedPizzas = filterPizzas.sort((a,b) => {
          return a.price - b.price;
        });
        break;
        case 2: 
          sortedPizzas = filterPizzas.sort((a,b) => {
          return a.title.localeCompare(b.title); 
        });
        break;
        default:
          sortedPizzas = filterPizzas;
        break;
    }
    return sortedPizzas;
  };

  module.exports = setSort;