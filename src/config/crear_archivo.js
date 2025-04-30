const xlsx = require('xlsx');
const fs = require('fs');

function obtenerDatos() {
    const workbook = xlsx.readFile('../templates/lista_pecios_masvida_actualizada.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    var json = [];

    jsonData.forEach((row, index) => {
            json.push({
                Clave: row['Clave'],
                Descripcion: row['Descripcion'],
                PRECIO_MAS_VIDA: row['PRECIO MAS VIDA']
            });
    });

    return(json);
}

function crearArchivo() {
    try {
        fs.writeFileSync('precios_masvida_actualizada.json', JSON.stringify(obtenerDatos()), 'utf8');
        console.log('Archivo creado y datos escritos exitosamente');
    } catch (error) {
        console.log('Error escribiendo en el archivo:')
    }
}

crearArchivo();

module.exports = crearArchivo;