//1. IMPORTACIONES
const express           =require("express")
const router            = express.Router()

const bookController    =require("./../controllers/bookController")  

//2. Rutas de la URL Base
router.get("/rod", (req,res) =>{
    res.send("Estas en el de estudiantes de rod")
})

//CREAR
//Crear Libro VISTA (Para el formulariio)
router.get("/create", bookController.viewCreateBook)
//Crear libro - ruta para el formulario
router.post("/create", bookController.createBook)


//READ
//Lectura de los libros creados
router.get("/", bookController.getAllBooks)
//Lectura de un libro ESPECIFICO
router.get("/:bookID", bookController.getBook)
//Cualquier 👆 (:) parametro despues de books, va a ejecutar bookController.getBook ejemplo http://localhost:3005/books/pablo o ...books/rod o .../books/libro (cualquier palabra despues de books)

//UPDATE
//Actualizar la BD
router.get("/:bookID/edit", bookController.viewEditBook)
router.post("/:bookID/edit", bookController.editBook)


//DELETE
//Borrar un libro especifico
router.post("/:bookID/delete", bookController.deleteBook)



// 3. Exportaciones
module.exports = router