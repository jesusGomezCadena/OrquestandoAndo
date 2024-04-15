# Usa una imagen base de Node.js
FROM node:21-alpine3.18

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo del proyecto al contenedor
COPY ./servicio_cris.js ./

# Instala Express
RUN npm init -y
RUN npm install express

# Expone el puerto en el que se ejecutará el servicio
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "servicio_cris.js"]