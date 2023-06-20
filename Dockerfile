# Establecer la imagen base
FROM node:14

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos de paquete
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código de la aplicación al contenedor
COPY . .

# Exponer el puerto que la aplicación utiliza
EXPOSE 3000

# Ejecutar la aplicación
CMD [ "node", "index.js" ]