//Importação
const app = require('./app');

//Importação da configuração (variables.env)
require('dotenv').config({path:'variables.env'});

//Configuração do servidor
app.set('port', process.env.PORT || 8080 );  
const server = app.listen(app.get('port'), () => {
    console.log("[OK] - Servidor em PORT: " + server.address().port);
}); 