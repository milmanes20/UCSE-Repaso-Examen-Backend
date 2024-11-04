# Proyecto Integrador: API CRUD con Express y MongoDB

## Descripción del Proyecto

En este proyecto, desarrollarás una API RESTful utilizando **Express** y **MongoDB** que permitirá realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de productos electrónicos. La aplicación tomará como base el archivo `electronicos.json`, el cual contiene detalles de productos electrónicos, como su nombre, precio y categorías. Tu objetivo es modelar y manipular esta información mediante una API que siga las prácticas de desarrollo vistas en clase.

## Entrega
Deberás diseñar y desarrollar una API backend que maneje la información de productos electrónicos almacenada en MongoDB. Además, se espera una breve documentación de los endpoints creados.

## Dataset Proporcionado

- **electronicos.json**: Contiene detalles de productos electrónicos, incluyendo `codigo`, `nombre`, `precio`, y `categorias`. Este archivo será la referencia para el modelo de datos de MongoDB.

## Modelo de Base de Datos
El archivo `electronicos.json` incluye propiedades de cada producto. Deberás crear un modelo en Mongoose llamado `Producto`, con al menos los siguientes campos:

- **codigo**: Número único que identifica cada producto.
- **nombre**: Nombre del producto (por ejemplo, "Notebook", "Smartphone X10").
- **precio**: Precio en formato decimal.
- **categorias**: Arreglo de categorías relacionadas al producto (ej. "Computación", "Electrónica").

## Funcionalidades del CRUD

1. **Obtener todos los productos**
   - Endpoint que devuelve todos los productos en la base de datos.
   - Implementa control de errores en caso de falla en la conexión con MongoDB.

2. **Obtener un producto por código**
   - Endpoint para obtener un producto específico usando su `codigo`.
   - Manejo de errores en caso de que el producto no exista.

3. **Filtrar productos**
   - Endpoint para filtrar productos por nombre, categoría o rango de precios.
   - Control de errores para manejar situaciones de búsqueda sin resultados.

4. **Agregar un nuevo producto**
   - Endpoint que permite agregar un nuevo producto a la base de datos.
   - Validación de campos obligatorios (ej. `nombre`, `precio`).

5. **Actualizar un producto**
   - Endpoint para actualizar detalles de un producto, como su `precio` o `categorias`.
   - Manejo de errores en caso de que el producto no exista o la actualización falle.

6. **Eliminar un producto**
   - Endpoint que permite eliminar un producto de la base de datos por su `codigo`.
   - Manejo de errores en el caso de productos inexistentes o problemas en la eliminación.

7. **Control de Errores**
   - Implementación de respuestas claras con mensajes y códigos de error en caso de errores en las solicitudes.
   - Rutas no existentes deben manejarse con una respuesta adecuada.

## Detalle de Endpoints

A continuación, se describe cada endpoint requerido para el CRUD de productos electrónicos. Asegúrate de que todos devuelvan respuestas en formato JSON y que manejen adecuadamente los códigos de estado HTTP.

1. **Obtener todos los productos**
   - **Método**: `GET`
   - **Ruta**: `/api/productos`
   - **Descripción**: Devuelve una lista con todos los productos electrónicos disponibles.

2. **Obtener un producto por código**
   - **Método**: `GET`
   - **Ruta**: `/api/productos/:codigo`
   - **Descripción**: Devuelve los detalles de un producto específico utilizando su `codigo`.
   - **Parámetros**:
     - `codigo` (en la URL): Número único del producto.

3. **Filtrar productos por rango de precios**
   - **Método**: `GET`
   - **Ruta**: `/api/productos/filtrar`
   - **Descripción**: Permite filtrar productos por rango de precios utilizando parámetros de consulta (query params).
   - **Parámetros de consulta**:
     - `precioMin`: Precio mínimo para el filtro.
     - `precioMax`: Precio máximo para el filtro.

4. **Agregar un nuevo producto**
   - **Método**: `POST`
   - **Ruta**: `/api/productos`
   - **Descripción**: Agrega un nuevo producto a la base de datos.
   - **Cuerpo de la solicitud (JSON)**:
     ```json
     {
       "codigo": 31,
       "nombre": "Nuevo Producto",
       "precio": 999.99,
       "categorias": ["Categoria1", "Categoria2"]
     }
     ```

5. **Actualizar un producto**
   - **Método**: `PUT`
   - **Ruta**: `/api/productos/:codigo`
   - **Descripción**: Actualiza los datos de un producto específico utilizando su `codigo`.
   - **Cuerpo de la solicitud (JSON)**:
     ```json
     {
       "nombre": "Nombre Actualizado",
       "precio": 899.99,
       "categorias": ["Categoria1", "Categoria3"]
     }
     ```

6. **Eliminar un producto**
   - **Método**: `DELETE`
   - **Ruta**: `/api/productos/:codigo`
   - **Descripción**: Elimina un producto de la base de datos mediante su `codigo`.

## Estructura del Repositorio

\`\`\`plaintext
/controllers
  - productoController.js
/json
  - electronicos.json
/README.md
/app.js
/config/
  - database.js
/models/
  - producto.js
/routes/
  - productoRoutes.js
\`\`\`

### Descripción de Archivos

- **/json**: Contiene el archivo electronicos.json con los datos de productos.
- **/README.md**: Archivo con la descripción del proyecto y pasos para ejecutarlo.
- **/app.js**: Archivo principal de la aplicación Express.
- **/config/database.js**: Configuración de la conexión a MongoDB.
- **/models/**: Contiene el modelo de datos `Producto` para MongoDB.
- **/routes/**: Define las rutas de los endpoints del CRUD.

## Instrucciones de Entrega

1. **Fork** el repositorio desde [aquí](https://github.com/FabioDrizZt/UCSE-Trabajo-Integrador-Backend/fork).
2. **Clona** tu fork en tu máquina local.
   \`\`\`bash
   git clone https://github.com/tu-usuario/tu-repositorio-fork.git
   \`\`\`
3. Realiza los cambios y sube tu código a tu fork.
4. **Sube** los cambios a tu fork.
   \`\`\`bash
   git add .
   git commit -m "Descripción de los cambios"
   git push origin main
   \`\`\`

5. Agrega a los siguientes usuarios como colaboradores en tu repositorio:
   - [FabioDrizZt](https://github.com/FabioDrizZt)

## Conclusión

Este proyecto te permitirá aplicar los conceptos clave de desarrollo backend con Express y Mongoose, además de gestionar datos en MongoDB. ¡Recuerda mantener tu código organizado y bien documentado!
