# Movies App

Este proyecto fue realizado con Angular 16.2.14. Para el estilado, se usó Tailwind CSS y para el consumo de datos, Axios.

## Ejecución del proyecto

Ejecutar `npm start` para levantar el proyecto en local (`http://localhost:4200/`). Ejecutar `npm run build` para generar el compilado.

## Funciones desarrolladas

Se desarrolló dos vistas: `home` y `movies`. En `home` tiene una link para redirigir a la vista de películas. También se puede hacer desde el navbar desarollado.

En `movies` se desarrolló los requerimientos técnivos. Se implementó filtros de búsqueda mediante un input nativo. Este input realiza el filtro tanto por películas como por descripción de la misma.

También se implementó un menú de opciones para el filtrado de las películas por el género. Este menu de opciones fue realizado con checkboxes nativos.

Se agrega un archivo JSON en una carpeta `data`, dentro de la carpeta `assets`. Ese archivo se construye manualmente para su posterior consumo mediante Axios. Se configura una instancia y luego se realiza el llamado del JSON mediante una petición GET.
