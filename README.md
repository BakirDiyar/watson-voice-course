Este proyecto fue generado con [Create React App](https://github.com/facebookincubator/create-react-app).

Introducción
============

[Watson](https://www.ibm.com/watson/ "Sitio web de Watson IBM") es un servicio de IBM que nos permite utilizar
la inteligencia artificial en nuestro proyectos, puedes checar su sitio web para tener más información al respecto.

Este es el código fuente para el [tutorial que hemos creado en nuestro blog](https://medium.com/biotec-io/tutorial-react-watson-express/home),
que trae todos los por menos explicados.

## Instalación ##
Para poder acceder al proyecto vamos a clonar el repositorio
[https://github.com/biotec-io/watson-voice-course](https://github.com/biotec-io/watson-voice-course), de la siguiente forma:

`git clone https://github.com/biotec-io/watson-voice-course.git`

Una vez clonado el repositorio, entramos a la carpeta: `cd watson-voice-course` e instalamos las dependencias necesarias para correr el proyecto:
`npm install` o `yarn install`, dependendiendo del gestor de paquetes que usemos.

También es importante jalar todas las referencias a las ramas y las tags que tiene el proyecto, esto se hace de la siguiente forma:
`git fetch --all`

Es necesario que te registres en [Watson](https://www.ibm.com/watson/) para que
así puedas generar tus claves,
en el [tutorial](https://medium.com/biotec-io/creando-una-aplicaci%C3%B3n-de-reconocimiento-de-voz-con-watson-react-y-express-9985d9b717e8) están
los pasos a seguir.

Una vez tienes tus claves es importante que las guardes en un archivo `.env` en la raíz del proyecto con el siguiente formato:

``` shell
SPEECH_TO_TEXT_USERNAME="nombre de usuario de speech-to-text"
SPEECH_TO_TEXT_PASSWORD="password de speech-to-text"
```

## Corriendo el servidor ##
El proyecto ya tiene dos scripts predefinidos para correr el servidor, si quieres saber la razón del
por qué, **recuerda consultar el tutorial**.

Abrimos nuestra terminal y necesitamos tener dos ventanas activas en la ruta del proyecto, vamos a ejecutar los siguientes scripts:

``` shell
// con npm
npm run start:react
npm run start:watson
// con yarn
yarn start:react
yarn start:watson
```

El script `start:react` corre el servidor de create-react-app, y `start:watson` corre el servidor de la API.

Ahora puedes visitar `localhost:3000` para checar tu aplicación.

## Versiones del proyecto y uso con el tutorial ##
El proyecto está versionado para cada versión del tutorial, en este caso las versiones son las siguientes:

  * v0.1.1 - [Parte 1. Introducción](https://medium.com/biotec-io/creando-una-aplicaci%C3%B3n-de-reconocimiento-de-voz-con-watson-react-y-express-38366a7f11b1)
  * v0.1.2 - [Parte 2. Registro en IBM Watson y configuración de claves](https://medium.com/biotec-io/creando-una-aplicaci%C3%B3n-de-reconocimiento-de-voz-con-watson-react-y-express-9985d9b717e8)
  * v0.2.0 - [Parte 3. Integración con ReactJS](https://medium.com/biotec-io/creando-una-aplicaci%C3%B3n-de-reconocimiento-de-voz-con-watson-react-y-express-2a4eb5ef2e8a)

Es importante señalar que la versión final con estas instrucciones se encuentra en la rama `master` del proyecto:

Para cambiar de versión o rama, simplemente escribimos lo siguiente (solamente es un ejemplo):

``` shell
git checkout tags/v0.1.1 # Esto nos permite cambiar al tag v0.1.1
```

## Licencia ##
Este proyecto se encuentra bajo licencia MIT:

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia de este software
y de los archivos de documentación asociados (el "Software"), para utilizar el Software sin restricción,
incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar, publicar, distribuir,
sublicenciar, y/o vender copias del Software, y a permitir a las personas a las que se les
proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA,
INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO
INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN,
DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO,
QUE SURJA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.
