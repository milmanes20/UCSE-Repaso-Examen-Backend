const express = require('express')

const mongoose = require('mongoose')

const { producto } = require('./models/producto') //improtar modelo producto
const connectDB = require('./config/database'); // importar la conexión a la base de datos
const productoRoutes = require('./routes/productoRoutes'); // importar las rutas de productos
const app = express()
const port = process.env.PORT || 3000;


app.use(express.json())

// Ruta principal de prueba
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de Productos Electrónicos!');
  });

  //
  /*app.get('/api/productos', async (req, res) => {

    const allproducto = await producto.find()
  
    return res.status(200).json(allproducto)
  
  })*/
  
 app.use('/api/productos', productoRoutes); // Usar las rutas de productos


  // Conectar a la base de datos y levantar el servidor
const startServer = async () => {
    await connectDB(); // Conectar a la base de datos
    app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));
  };
  
  startServer();
  