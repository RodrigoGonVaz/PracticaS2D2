// ./models/Book.js

// 1. IMPORTACIONES
const mongoose	= require("mongoose")

// 2. SCHEMA
// REQUISITOS PARA CREAR UN LIBRO
const bookSchema = mongoose.Schema({
	title: String,
	description: String,
	author: String,
	rating: Number
},
{
	timestamps: true // ESTABLECER LA FECHA EN LA CUAL FUE CREADO
})

// 3. MODELO
const Book = mongoose.model("Book", bookSchema)

// 4. EXPORTACIÓN
module.exports = Book