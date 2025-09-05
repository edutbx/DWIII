// Carregar os modulos:
const http = require('http');

// Criar o servidor:
var server = http.createServer(function(request, response){
    //definir o header com o tipo 
    response.writeHead(200, {"content-type":"text/plain"});

    response.end("Olá mundo Node...")
});

// Configurar o servidor:
server.listen(3000);
console.log("Server inicado");
