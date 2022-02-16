# Proyecto2
## Página web de La Liga
![La Liga](https://besthqwallpapers.com/Uploads/19-5-2019/92665/thumb2-laliga-glitter-logo-football-leagues-creative-metal-grid-background-laliga-logo.jpg "La Liga")
## Descripción
Página web diseñada para acceder a toda la información relativa a la liga de futbol española principalmente, pero también a algunas de las más importantes ligas europeas.Se ofrece la clasificación,resultados y estadisticas, así como enlaces al resto de competiciones (champions,copa...) e información sobre el mercado de fichajes. También se da acceso a las páginas web de cada uno de los esquipos.
## Estructura
* Home (dividida en un carrusel con tres páginas) 
    * Enlaces a Champions league,Europa league,Copa del Rey y Segunda División.
    * Enlace a las noticias sobre fichajes.
    * Enlaces a todas las páginas web de las ligas elegidas.
* Partidos
    * Resultados de todos los partidos disputados hasta la fecha y calendario de los que restan por jugar.
    * Posibilidad de filtrar por resultado del partido y por liga.
* Clasificación
    * Clasificación de la liga española actualizada con todos los datos por equipo.
* Estadísticas
    * Tabla de eqipos con mejor media goleadora.
    * Tabla de equipos menos goleados como visitantes.
    * Posibilidad de filtrar por liga.
## Datos técnicos
Se han usado varias funcionalidades aprendidas durante el desarrollo de este proyecto.

function getFetch(): La obtención de datos desde una API externa haciendo uso de la función fetch. Esto permite que toda la información sea a tiempo real.

function crearTabla(): La creacion de tablas dinámicas, creadas a partir de los datos de la API, de tal manera, que si quisieramos realizar el mismo proyecto para competiciones de otros paises, bastaria con cambiar un solo dato y seguiría siendo igual de funcional.

function filtros(): Permite acceder a los resultados de los partidos según la selección que realiza previamente el usuario desde el formulario creado en HTML. La función de crearTabla(), es modificada por estos datos ya filtrados, mostrando asi, exclusivamente la información que solicita el usuario.

function estadísticas(): Para esta funcionalidad, primero se han de descartar aquellos partidos que aun no han sido jugados. A partir de ahí, declarar las variables con los datos necesarios para poder realizar los cálculos, en este caso, partidos y goles. Una vez obtenidos los resultados de las estadísticas, la función debe acortar la array final para que la función crearTabla() muestre únicamente los cinco resultados que nos interesan en cada caso
