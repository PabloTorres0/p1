const htpp = require('http');
const server = htpp.createServer((req,res)=>{

    res.end('ESTOY RESPONDIENDO A TU SOLICITUD v3')

}) 

const puerto = 3000;
 server.listen(puerto, ()=>{
    console.log('ESCUCHANDO SOLICITUDES')
 })