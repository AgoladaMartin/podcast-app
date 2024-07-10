# Aplicación para reproducir podcasts

En este repositorio se encuentra el código de una _Single Page Application (SPA)_ para escuchar el top 100 de podcasts musicales de itunes. Existen 2 modos de ejecutar la aplicación: modo _development_ y modo _production_.

Puedes probar la aplicación en vercel a través de este Link:
https://podcast-app-woad.vercel.app/

## Instrucciones

Para construir y ejecutar la aplicación hay que clonar el repositorio `podcast-app` e instalar sus dependencias. Para clonarlo hay que tener instalado Git, puede obtenerse en http://git-scm.com/. Para instalar las dependencias es necesario tener instalado un gestori de dependencias como `npm` que puede obtenerse en https://nodejs.org/es/download

### Como clonar el repositorio

Para clonar el repositorio se debe ejecutar la siguiente instrucción:

```
git clone https://github.com/AgoladaMartin/podcast-app.git
```

### Como instalar las dependencias

Para instalar las dependencias hay que situarse en la raiz del proyecto y ejecutar la siguiente instrucción:

```
npm install
```

## Como ejecutar la aplicación

Tenemos dos modos de ejecución de la aplicación, modo _development_ y modo _production_. En el modo _development_ los assets se sirven sin minimizar y en el modo _production_ se sirven concatenados y minimizados.

### Modo _development_

Para ejecutar la aplicación en modo desarrollo hay que situarse en la raiz del proyecto y ejecutar la siguiente instrucción:

```
npm start
```

La aplicación se visiulizará en tu navegador en la siguiente dirección http://localhost:3000. El modo _development_ recarga la página en el momento en que guardas los cambios realizados en el código.

### Modo _production_

Para ejecutar la aplicación en modo producción hay que situarse en la raiz del proyecto y ejecutar la siguiente instrucción:

```
npm run build
```

Esta orden construye la aplicación minificada optimizada para un mejor rendimiento y la coloca en el directorio `build`, que queda listo para ser desplegado en producción.

Se puede servir con un servidor estático, por ejemplo con `serve` (más información aqui https://www.npmjs.com/package/serve).
Para crearlo hay que ejecutar el siguiente comando: (hay que ejecutar esta orden en modo administrador, si estamos en windows o con el comando SUDO en linux)

```
npm install - g serve
```

A continuación pasamos el directorio `build` creado anteriormente con la siguiente instrucción:

```
serve -s build
```

La aplicación en modo producción se visiulizará igualmente en tu navegador en la siguiente dirección http://localhost:3000.
