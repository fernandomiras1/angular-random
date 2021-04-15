[![pipeline status](https://cmprod.naranja.com.ar/frontend/webapp/badges/integracion/pipeline.svg)](https://cmprod.naranja.com.ar/frontend/webapp/commits/integracion)
[![coverage report](https://cmprod.naranja.com.ar/frontend/webapp/badges/integracion/coverage.svg)](https://cmprod.naranja.com.ar/frontend/webapp/commits/integracion)

## Tabla de contenidos

- [Entorno](#entorno)
- [Instalación](#instalación)
- [Demo](#demo)
  - [Pública](#link-público)
  - [Local](#ejecutar-demo-local)
- [Redux](#redux)
  - [Ver documentación](#ver-documentacion-redux)
- [PWA](#pwa)
  - [Ver documentación](#ver-documentacion-pwa)
- [Desarrollo](#desarrollo)
  - [Utilidades de desarrollo](#utilidades-de-desarrollo)
    - [Lint](#lint)
    - [Testing](#testing)

## Demo

### Pública

  - link eks aws naranja
  

### Ejecutar demo local

Para correr la demo local solamente hay que ejecutar lo siguiente:

```bash
$ ng serve --open # se abrirá el browser con la demo
```  
___
## Entorno

  - [nodejs](https://nodejs.org/) (testeado con 8.16.0 - lts/carbon)
  - [npm](https://www.npmjs.com) (version 6.4.1 o superior)
  - [angular](https://angular.io/) (version 7.2)
  - [workbox](https://developers.google.com/web/tools/workbox/)
  - [zumo](https://evoluciondigital.us-south.containers.mybluemix.net:29444)
___
## Instalación

Luego de clonarse nuestro repositorio, ejecutar los siguientes comandos.

```bash
$ cd angular-client  (nuestro repo)
$ npm install
$ ng serve  (pueden cambiar de entorno usando -c desa|prod|qa)
```

___
## Redux

Redux es una herramienta para la gestión de estado en aplicaciones web que nació en 2015 de la mano de @dan_abramov.
Es una librería agnóstica al framework, en nuestro caso (angular 6) usamos ngrx.

### [Ver documentacion Redux](https://cmprod.naranja.com.ar/frontend/webapp/tree/integracion/docs/redux/README.md)
___

## PWA

  Son básicamente páginas web, pero mediante el uso de Service Workers y otras tecnologías se comportan más como aplicaciones nativas. Es decir, que nos brinda una experiencia de usabilidad como si fuera una aplicación nativa mobile.

### [Ver documentacion PWA](https://cmprod.naranja.com.ar/frontend/webapp/tree/integracion/docs/pwa/README.md)

___
## Desarrollo

### Utilidades de Desarrollo

#### Lint
Para ejecutar las validaciones del código, ejecutar lo siguiente:

```bash
$ npm run lint
```

#### Testing

Para correr la suite de test y que genere además el coverage:
```bash
$ npm run test:build
```

Por convenio de arquitectura hemos tomado como base 80% de coverage.

Para correr los test en modo debug con browser, ejecutar el siguiente comando y el browser quedará abierto.

```bash
$ npm run test
```

Los test son ejecutados vía [Karma](https://karma-runner.github.io) y podemos escribirlos con [Jasmine](https://jasmine.github.io/).

Ejemplo para hacer unit test en angular, puede ver el siguiente repositorio: https://github.com/juristr/angular-testing-recipes
