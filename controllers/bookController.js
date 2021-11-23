const Book             =require("./../models/Book")


exports.getAllBooks = async (req,res) => {
    const allBooks = await Book.find({})
    console.log(allBooks)

    res.render("books/list", {
        data: allBooks
    })

}


exports.getBook = async (req,res) =>{
    //      req.params 👇 nos ayuda a ir por la palabra despues de /books/...
    // console.log(req.params) // <--- { bookID: 'pablo' } o { bookID: 'rod' } o { bookID: 'libro' }

    const singleBookID = req.params.bookID

    const getTheBook = await Book.findById(singleBookID)
    console.log(getTheBook) //<--- un objeto por lo que se usa un with en hbs

    res.render("books/single", {
        data: getTheBook
    })
    // res.send("Aqui va a ir un libro individual")
}


exports.viewCreateBook = async (req,res) =>{

    res.render("books/create")

}

exports.createBook = async (req,res) =>{

    console.log(req.body) //<--- datos del formulario
    const title = req.body.title
    const author = req.body.author
    const description = req.body.description
    const rating = req.body.rating

    const newBookCreated = await Book.create({title, author, description, rating})
    console.log(newBookCreated)

    console.log("Datos recibidos") // para ver si recibe mis datos

    res.redirect("/books")

}

//----------------------UPDATE-----------------------
exports.viewEditBook = async (req,res) =>{
    console.log(req.params) //<----- datos dinamicos de una URL
    const bookID = req.params.bookID
    const foundBook = await Book.findById(bookID)
    console.log(foundBook)
    res.render("books/edit", {
        data: foundBook
    })

}

exports.editBook = async (req,res) =>{
    
   //1. ID Del libro (primer dato)
    const bookID = req.params.bookID


   //2. Nuevos cambios del formulario (/books/id/edit - necesito esos datos)
    const title = req.body.title
    const description = req.body.title
    const author = req.body.author
    const rating = req.body.rating

    console.log(bookID) //<--- nos muestra el ID del libro al cual le dimos editar
    console.log(title, description, author,rating) //<--- nos muestra el title, description, author,rating del libro a editar

    //3. Realizar la actualizacion de Datos en la BD
    //findByIdAndUpdate (ID, [NUEVOS CAMBIOS EN OBJETO], [DEVOLVER A LA VARIABLE LA ACTUALIZACION])
    const updatedBook = await Book.findByIdAndUpdate(
        bookID, //<------ ID del documento
        {title, description, author,rating}, //<------ parametros que vamos a editar
        {new:true}) // DEVOLVER A LA VARIABLE EL DOCUMENTO ACTUALIZADO
    
        console.log(updatedBook)

        res.redirect(`/books/${updatedBook._id}`)
}

//----------------------DELETE-----------------------
exports.deleteBook = async (req,res) =>{

    //1. ID Del libro (primer dato)
    const bookID = req.params.bookID


   //2. Realizamos borrado en BD
   const deleteBook = await Book.findByIdAndDelete(bookID)

   //3. Redireccion
   res.redirect(`/books`)

 }
 
