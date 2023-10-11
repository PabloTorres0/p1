const express = require('express');
const app= express();
const puerto= 3000;

app.set('view engine','ejs');   
app.set('views', __dirname+'/views')

app.use(express.static(__dirname+"/public")) 

//Rutas Web
app.use('/',require('./router/RutasWeb'))
app.use('/mascotas',require('./router/Mascotas'))





app.use((req,res,next)=>{
    res.status(404).render('404',{
        titulo:'404 dinamico',
        descripcion:'rock rock rock'
    })
})
app.listen(puerto,()=>{
    console.log('SERVIDOR A SU  SERVICIO EN EL PUERTO', puerto)
})