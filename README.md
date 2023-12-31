# Proyecto API con Node.js y Express

Este proyecto es una API construida con Node.js. Utiliza la librería axios para realizar solicitudes HTTP a un servicio externo que provee archivos en formato CSV. La API procesa los datos de los archivos y devuelve la información procesada en formato JSON.

# Postman collection
Puedes usar este link para acceder a la colección de postman y ejectuar los endpoints una vez hayas corrido este repositorio en docker.
[Postman Collection Link]([/guides/content/editing-an-existing-page](https://www.postman.com/brotherick/workspace/echo-server/collection/1584350-79771696-b476-415b-bb55-c76ef034dcbe?action=share&creator=1584350))


O corre la colección en tu perfil
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/1584350-79771696-b476-415b-bb55-c76ef034dcbe?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D1584350-79771696-b476-415b-bb55-c76ef034dcbe%26entityType%3Dcollection%26workspaceId%3D06b98e37-7532-4ce6-857e-b894a188b916)

## ¿Qué hace esta API?
  
- **Route (`/files/data`)**: Esta ruta realiza una solicitud GET a un servicio externo para obtener una lista de nombres de archivos. Luego, para cada archivo, se realiza una nueva solicitud GET para obtener los datos del archivo. El contenido del archivo, en formato CSV, se procesa línea por línea. Cada línea se divide en columnas, y si la línea tiene al menos 4 columnas, se recogen y validan los datos de las columnas específicas. Los datos procesados se empaquetan en un objeto y se agregan a una lista. La lista de todos los datos procesados se devuelve como respuesta en formato JSON.
- **Route (`/files/data?fileName={nombre}`)**: Esta ruta permite filtrar los archivos por nombre mediante el parámetro de consulta fileName en la ruta. Esto permite obtener solo los datos de un archivo específico en lugar de todos los archivos disponibles.
- **Route (`/files/list`)**: Esta ruta realiza una solicitud GET a un servicio externo para obtener una lista de nombres de archivos.

## ¿Cómo correr este proyecto?

### Requisitos previos:

- Debes tener instalado Node.js y npm en tu máquina.
- Debes tener Docker instalado si quieres correr la aplicación en un contenedor Docker.

### Pasos para correr el proyecto:

1. **Clona el repositorio**: 
    ```
    git clone https://github.com/brotherick14/api-echo-server
    ```

2. **Navega al directorio del proyecto**: 
    ```
    cd api-echo-server
    ```

3. **Instala las dependencias**: 
    ```
    npm install
    ```

4. **Inicia el servidor**: 
    ```
    npm start
    ```

### Pasos para correr el proyecto en un contenedor Docker:

1. **Construye la imagen Docker**: 
    ```
    docker build -t api-echo-server .
    ```

2. **Corre el contenedor Docker**: 
    ```
    docker run -p 3000:3000 api-echo-server
    ```

El servidor debería estar corriendo en http://localhost:3000.

### Comandos disponibles:

1. **Ejecuta los tests con mocha + chai**: 
    ```
    npm run test
    ```

2. **Ejecuta la validacion con lint usando standardjs**: 
    ```
    npm run lint
    ```

3. **Inicia la aplicacion**: 
    ```
    npm run start
    ```

La aplicación utliza husky para validar con precommits los test y lint antes de poder subir cambios.
