const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    res.render("mascotas",{
        arrayMascotas:[
            {id:'id1',nombre:'rex', descripcion:'rex dascripcion'},
            {id:'id2',nombre:'chanchito', descripcion:'chanchito dascripcion'}]
    })
})

module.exports=router;