# Tin Marín App

Tin Marín App es una aplicación móvil que tiene como objetivo colocar los servicios del museo de los niños a disposición de todo público para generar una base de conocimientos sólida en los visitantes.

## Tecnologías

- [React Native](https://reactnative.dev/): Version 0.63.4

- [React](https://reactjs.org/): Version 16.13.1

- [Javascript](https://www.javascript.com/)

- [Java Android](https://developer.android.com/)

- [Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

## Entorno de desarrollo:

Dependiendo del dispositivo con el que desees trabajar para desarrollar en React Native, será la configuración que deberás realizar.

Debido a que el proyecto fué solicitado únicamente para Android, cualquier sistema operativo (Windows, Linux, Unix), será útil.

Un breve resumen de los pasos a realizar ya que son apartados que tienen su propia documentación oficial:

1. Descargar e instalar las siguientes dependencias: -[NodeJS](https://nodejs.org/en/download/). -[JDK](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html). -[Android-Studio](https://developer.android.com/studio).

2. Configurar entornos de desarrollo: [Configuración de entorno](https://reactnative.dev/docs/environment-setup).

## Instalando paquetes.

El proyecto utiliza librerías de terceros de código abierto, que permiten evitar que reinventemos la rueda. Para encontrar todas estas dependencias, las puedes ubicar en la carpeta raíz del proyecto, en el archivo llamado "package.json".

Para instalar las librerías abre una consola que utilice el manejador de paquetes de node "npm" y digita en la consola: `npm install`

Este proceso puede tardar, ya que va a descargar todas estas dependencias y las almacenará en la carpeta "node_modules" ubicada en la raíz del proyecto.

## Levantando la aplicación.

Si lograste configurar bien tu entorno de desarrollo, no deberías tener ningún problema hasta este punto. En una terminal digita el siguiente comando: `npm run android`

Sucederá lo siguiente:

1. Levantará una consola [Metro Bundler](https://reactnative.dev/docs/_getting-started-macos-ios#step-1-start-metro), que es el motor que traducirá los códigos javascript, a código nativo Android o iOS.

2. Levantará un emulador virtual que previamente configuraste en Android Studio al configurar tu entorno de desarrollo. Si prefieres usar un dispositivo físico, visita el apartado [Run on Physical Device](https://reactnative.dev/docs/running-on-device).

3. Instalará en el dispositivo Android la aplicación y dependerá totalmente de Metro Bundler. Esto significa que la aplicación está configurada para el entorno de desarrollo, y no para un entono de producción.

4. Una vez instalada se levantará la aplicación corriendo en tu dispositivo.

> Toma en cuenta que el comando utilizado es un acortado del comando oficial utilizado en la documentación con react native cli: `react-native run-android` o si no instalaste esta herramienta de forma global la puedes utilizar desde la carpet "node_modules" anteponiendo el comando npx: `npx react-native run-android`.

## Documentación Manual Técnico.

Disponemos de un manual técnico automatizado. Utilizamos [ESDoc](https://esdoc.org/) para hacer las anotaciones que permiten generar la Wiki de forma rápida.

Para generar la documentación basta con correr el siguiente comando: `npm run docs`

Va a tardar un momento hasta devolvernos el control de la consola. Como resultado, se creará una carpeta llamada "docs" en la raíz del proyecto. Es un sitio estático al cuál puedes acceder manualmente y abriendo el archivo "index.html"; o si deseas hacerlo desde consola puedes ejecutar el siguiente comando:

`start ./docs/index.html` (Windows)

---
---
---
# Instrucciones de como correr:

Si se desea correr solo es necesario las siguientes instrucciones:

### Para ejecutar los comandos
- Terminal (Linux)
- Powershell/CMD (Windows)

### La app se probo con las siguientes condiciones :

- Android Studio Bumblebee | 2021.1.1 Patch 2
- Node.js v16.14.2. 
- Java JDK 1.8.0_321-b07

# 0. Borrar Cache

Si es posible borre el cache de node para no tener problemas

```
npm cache clean --force
```

Verifique que el cache este borrado con:

```
npm cache verify
```

# 1. Instalar paquetes de Node

Primero instalar paquetes de node 
```
npm install
```

# 2. Verificar el entorno donde se correra
1. Se debe instalar ***Google USB Driver*** En Appearance & Behavior > System Settings > Android SDK > Android SDK Platform 30

2. Se debe instalar ***Google USB Driver*** En Appearance & Behavior > System Settings > Android SDK > Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

3. En [Configuración de entorno](https://reactnative.dev/docs/environment-setup) ir ala pestaña de React Native CLI Quickstar y buscar la configuracion del dispositivo donde se esta corriendo la app, por ejemplo: Windows -> Android
## 2.1 Dispositivo Fisico (omitir este paso si se correra en emulador)

1. Descargar e instalar Android Studio.
2. Ir alas configuraciones de Android Studio 
3. Se debe instalar ***Google USB Driver*** En Appearance & Behavior > System Settings > Android SDK > SDK Tools >Google USB Driver

- Ahora que tenemos los drivers corremos el comando 

```
npx react-native run-android
```

## 2.2 Emulador (omitir este paso si se correra en Dispositivo Fisico)

1. Descargar e instalar Android Studio.

- Corremos el comando 

```
npm run android
```
Si no tenemos nuestro telefono conectado inicia un emulador de android studio

# Importante

- Solo se necesita la Terminal / Powershell no es necesario tener Android Studio abierto

# Errores en listen 

Si da error el puerto porque esta ocupado puedes utilizar :
```
netstat -ano | findstr :<PORT>

taskkill /PID <PID> /F      
```

# Archivos que pueden dar error:

# local.properties

Si no se genera el archivo dentro de /android/

crearlo y dentro poner:
```
sdk.dir=C:\\Users\\<userName>\\AppData\\Local\\Android\\Sdk
```
