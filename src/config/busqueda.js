const lista = require('./lista_precios.json');

function searchByCharacter(char) {
    return lista.filter(item => {
      const name = item['nombre'];
      return name && name.toLowerCase().includes(char.toLowerCase());
    });
}

const result = searchByCharacter('17');
console.log(result);