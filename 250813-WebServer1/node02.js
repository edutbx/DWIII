// Carregar os modulos:
const http = require('http');

//Função de Callback parar o sevidor HTTP:
var callback = function(request, response){
    //Define o heder com o tipo de resposta:
    response.writeHead(200, {"Content-type":"text/plain" });
    //Msg de retorno
    response.end("Ola mundo node com callback...")
};
// Criar o servidor:
var server = http.createServer(callback);

// Configurar o servidor:
server.listen(3000);
console.log("Server inicado com callback...");
