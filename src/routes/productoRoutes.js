const express = require('express');
const router = express();
const {producto} = require('../models/producto');

// Obtener todos los productos
//// GET /api/productos - Obtener todos los productos
router.get('/', async (req, res) => {
    try {
      const allproductos = await producto.find();
      res.json(allproductos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  // Filtrar productos por rango de precios
// GET /api/productos/filtrar?precioMin=100&precioMax=500
router.get('/filtrar', async (req, res) => {
  try {
    const { precioMin, precioMax } = req.query;

    // Validar que los parámetros estén presentes
    if (!precioMin || !precioMax) {
      return res.status(400).json({ message: 'Debe proporcionar precioMin y precioMax' });
    }

    // Validar que los parámetros sean números válidos
    const min = parseFloat(precioMin);
    const max = parseFloat(precioMax);   

    if (isNaN(min) || isNaN(max)) {
      return res.status(400).json({ message: 'precioMin y precioMax deben ser números válidos.' });
    }

    // Filtrar productos por rango de precios
    const productosFiltrados = await producto.find({
      precio: { $gte: min, $lte: max },
    });

      // Validar si no se encontraron productos
      if (productosFiltrados.length === 0) {
        return res.status(404).json({ message: 'No se encontraron productos en el rango de precios especificado.' });
      }
     // Retornar los productos filtrados 
    res.status(200).json(productosFiltrados);
  } catch (error) {
    res.status(500).json({ message:'error de tipeo' });
  }
});


  //busca un solo resultado por codigo
//// GET /api/productos/:codigo - Obtener un producto por su código
  router.get('/:codigo', async (req, res) => {

    const { codigo } = req.params
    // Validar que el código sea un número válido
    // Si el código no es un número, devolver un error 400
    if (isNaN(codigo)) {
      return res.status(400).json({ message: 'El código proporcionado no es un número válido.' });
    }
  
    const Producto = await producto.findOne({ codigo: codigo })
    if (!Producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.status(200).json(Producto)
  
  })

// Crear un nuevo producto
// POST /api/productos - Crear un nuevo producto
router.post('/', async (req, res) => {

  // Validar que el cuerpo de la solicitud contenga los campos necesarios
  if (!req.body.codigo || !req.body.nombre || !req.body.precio) {
    return res.status(400).json({ message: 'Debe proporcionar código, nombre y precio para crear un producto.' });
  }
  // Validar que los datos proporcionados sean del tipo correcto
  const newProducto = new producto({ ...req.body })

  const insertarProducto = await newProducto.save()

  return res.status(201).json(insertarProducto)
   
})

//actualizar un producto por codigo
// PUT /api/productos/:codigo - Actualizar un producto por su código
router.put('/:codigo', async (req, res) => {
 try {
  // Obtener el código del producto desde los parámetros de la solicitud
  const { codigo } = req.params
     // 1. Validar que el código sea un número válido
     if (isNaN(codigo)) {
      return res.status(400).json({ message: 'El código proporcionado no es un número válido.' });
    }
  const Producto = await producto.findOne({ codigo: codigo })
  if (!Producto) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  const nuevoproducto= req.body
  // 2. Validar que el cuerpo de la solicitud contenga los campos necesarios
  if (!nuevoproducto.nombre || !nuevoproducto.precio) {
    return res.status(400).json({ message: 'Debe proporcionar nombre y precio para actualizar el producto.' });
  }
  // 3. Validar que los datos proporcionados sean del tipo correcto
   
  //actualiza el producto por codigo
  await producto.updateOne({ codigo: codigo }, nuevoproducto)
  //busca el producto actualizado por codigo
  const updatedProducto = await producto.findOne({ codigo: codigo })
  return res.status(200).json(updatedProducto)  
} catch (error){
  res.status(500).json({ message: 'Debe proporcionar un nombre válido y un precio numérico.' });
} 
});

// Eliminar un producto por código
// DELETE /api/productos/:codigo - Eliminar un producto por su código
router.delete('/:codigo', async (req, res) => {
try{
  const { codigo } = req.params

  const deletedProducto = await producto.findOneAndDelete({codigo: codigo})
 if (!deletedProducto) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  return res.status(200).json({message: 'Producto eliminado correctamente.' });


} catch (error) {
  res.status(500).json({ message: 'Error al eliminar el producto.' }); 
}
})







  

  module.exports = router;