const xlsx = require('xlsx');
const fs = require('fs');

// Leer el archivo Excel
const workbook = xlsx.readFile('LISTASASISTENCIA23-24.xlsx');
var n = 0;

// Crear un objeto para almacenar los datos de cada hoja
let lista = [];

// Recorrer cada hoja de trabajo en el archivo
workbook.SheetNames.forEach(sheetName => {
  // Obtener la hoja de trabajo por nombre
  const worksheet = workbook.Sheets[sheetName];
  
  // Convertir la hoja de trabajo a JSON
  const jsonData = xlsx.utils.sheet_to_json(worksheet);
  const columnToExtract = 'NOMBRE DEL ALUMNO (A)'; // La columna que deseas (por ejemplo, columna A)
  const numberOfRows = 10;
  

    for (let i = 1; i <= numberOfRows; i++) {
        const cellAddress = `${columnToExtract}${i}`;
        const cellValue = worksheet[cellAddress] ? worksheet[cellAddress].v : undefined;
        lista.push({ [columnToExtract]: cellValue });
    }
    // lista.push({
    //     id: n,
    //     nombre: row['NOMBRE DEL ALUMNO (A)'],
    //     ciclo: workbook.Sheets[sheetName]
    // });
    // n++;
  });
  // Agregar los datos al objeto principal usando el nombre de la hoja
//   lista[sheetName] = jsonData;


// Convertir el objeto a JSON
const jsonString = JSON.stringify(lista, null, 2);

// Guardar el JSON en un archivo
fs.writeFileSync('resultado_escula.json', jsonString, 'utf-8');

console.log('Datos de Excel convertidos a JSON correctamente.');