const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        //identifica la ruta en el que estoy y me agrega una carpeta dist, pero como lo quiero en la raiz le dejo solo un paramentro
        path:path.resolve(__dirname),
        //en la carpeta dist me agrega el archivo bundel.js
        filename:'bundel.js'
    }
}