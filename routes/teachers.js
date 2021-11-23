//1. IMPORTACIONES
const express           =require("express")

const router            = express.Router()


//2. Rutas de la URL Base
router.get("/mike", (req,res) =>{
    res.send("Estas en el de teachers de mike")
})

router.get("/", (req,res) =>{
    res.send("Estas en el home de teachers")
})



// 3. Exportaciones
module.exports = router