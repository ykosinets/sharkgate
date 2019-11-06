# Sharkgate Dashboard

## Whats inside
* class naming by [BEM](https://ru.bem.info/)
* BEM file structure
* styles with [SCSS](https://sass-lang.com/)
* transpiler -- [Babel](https://babeljs.io/) to support JavaScript (ES6)
* [Webpack](https://webpack.js.org/) to build js modules

## Setup
* setup [NodeJS](https://nodejs.org/en/)
* Setup ```gulp``` globally: ```npm install gulp-cli -g```
* Switch to the project directory: ```cd gulp-scss-starter```
* Download all required dependencies: ```npm install```
* To start work: ```npm run dev```
* To build project: ```npm run build```

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

## Files structure

```
gulp-scss-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

* Root directory:
    * ```.babelrc.js``` — Babel settings
    * ```.bemrc.js``` — BEM settings
    * ```.eslintrc.json``` — ESLint settings
    * ```.gitignore``` — Git ignored files
    * ```.stylelintrc``` — Stylelint settings
    * ```.stylelintignore``` — Stylelint ignored files
    * ```gulpfile.babel.js``` — Gulp settings
    * ```webpack.config.js``` — Webpack settings
    * ```package.json``` — список зависимостей
* Directory ```src``` — Dev sources directory:
    * BEM-blocks: ```src/blocks```
    * Fonts: ```src/fonts```
    * Images: ```src/img```
    * JS-files: ```src/js```
    * Site pages: ```src/views/pages```
    * SCSS-files: ```src/styles```
    * HTML-files: ```src/views```
    * Apache settings including [gzip](https://habr.com/ru/post/221849/): ```src/.htaccess```
* Directory ```dist``` — Compiled files
* Directory ```gulp-tasks``` — Gulp-tasks


## Commands
* ```npm run lint:style``` - Check SCSS-files for errors. To use with VSCode [plugin](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) should be installed. For WebStorm 
or PHPStorm turn on Stylelint at ```Languages & Frameworks - Style Sheets - Stylelint``` (errors wil be fixed automatically when file will be saved)
* ```npm run lint:style --fix``` - Fix SCSS-files errors
* ```npm run dev``` - Quick start for development
* ```npm run build``` - Just get build without server launch
* ```npm run build views``` - Compile Pug-files
* ```npm run build styles``` - Compile SCSS-files
* ```npm run build scripts``` - Compile JS-files
* ```npm run build images``` - Compile images
* ```npm run build webp``` - Convert images to ```.webp``` format
* ```npm run build sprites```- Compile sprites
* ```npm run build fonts``` - Compile fonts
* ```npm run build favicons``` - Compile favicons
* ```npm run build gzip``` - Compile Apache configs
