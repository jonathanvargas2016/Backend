# Backend
Desarrollo del lado servidor: NodeJS, Express y MongoDB

# Instalar ExpressJs
https://expressjs.com/en/starter/generator.html
```
$npx express-generator
```

# Crear un proyecto

```
$express --view=pug myapp
$npm install
```

#PUG es un generador de documentos HTML


#Modelo Vista Controlador
es un patron de arquitectura de software, utilizado para el desarrollo de aplicaciones web
separar la logica del modelo, control y vista.

#Modelo: define los objetos del modelo del negocio
#Vista: como se van a mostrar los datos
#Controlador: define la logica de actualizacion de nuestro modelo y o vista, en respuesta a la iteracion de un usuario de la aplicacion.


#Libreria para que se actualice automaticamente el servidor ante cualquier cambio
```
$npm install nodemon --save-dev
```

#correr servidor
```
$npm run devstart
```


#Agregar Mapas
https://leafletjs.com/examples/quick-start/
https://leafletjs.com/reference-1.6.0.html#tilelayer-url-template