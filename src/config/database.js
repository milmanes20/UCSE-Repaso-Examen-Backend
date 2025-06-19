// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Asegúrate de tener MongoDB Atlas URL o una URL local
    // Reemplaza <YOUR_MONGODB_URI> con tu URI de conexión
    await mongoose.connect('mongodb://localhost:27017/mongoose?authSource=admin')
    console.log('Servidor levantado en el puerto 3000')
  
  } catch (error) {
    console.error(`Error al conectar a MongoDB: ${error.message}`);
    process.exit(1); // Sale del proceso con un error
  }
}

module.exports = connectDB;


/*const start = async () => {

    try {
  
      await mongoose.connect(
  
        'mongodb://localhost:27017/mongoose?authSource=admin'
  
      )
  
      app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'))
  
    } catch (error) {
  
      console.error(error)
  
      process.exit(1)
  
    }
  
  }
  
  
  start()*/