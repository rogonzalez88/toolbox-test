El proyecto fue creado en react con base de create-react-app y express como back bien simple,
se utilizo create-react-app por su sencillez y buenas practicas ya implementadas, sin embargo
lo pudiese hacer con babel o  webpack segun solicitud y con un manejador de task como gulp y 
nodemon quizas para desarrollo del back.

### `npm run prepare`

Para inicializar el environment, funciona como un postscript install. realiza un npm install en las respectivas carpetas de back y front

### `npm back:serve`

Inicializa el back con el puerto 8080, (https://localhost:8080), donde el path base devuelve el front y (https://localhost:8080/api/text)
la api solicitada

### `npm back:test`

Ejecuta las pruebas de back

### `npm front:serve`

Inicializa el front para desarrollo con la herramienta de create-react-app

### `npm front:build`

Realiza el procesamiento js y css y crea los bundles

### `npm front:test`

Ejecuta las pruebas de front