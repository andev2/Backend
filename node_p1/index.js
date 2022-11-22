console.log("hola mundo");

const http = require("http");

const host = "0.0.0.0";

const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content.Type', 'text/plain') // informacion escondida del usuario / metadatos
    res.end("Hola mundo xd")
    //200   =  ok
    //300 = redireccion/ acortador
    //400 = cliente baboso
    //500 = error del server
    // 404  = no existe
}
);

server.listen(port, host, () =>{
    console.log("Server encendido en "+host+" / "+port)
}
);

//================================================================================
//==                      INSTALAR MONGO DB  y MYSQL                            ==
//================================================================================

