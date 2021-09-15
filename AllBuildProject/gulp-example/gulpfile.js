const { src, dest, watch } = require('gulp');
// const sass = require('gulp-sass')(require('sass')) --- То же самое как и три константы ниже.
// создвем две переменные и подтягиваем в них пакет -sass(компилятор), -gulp-sass(Обработчик)
// и передаем скомпилированные файлы в пакет обработчика. Далее в функции transpSass  выполняем 
// эту конструкцию.

const sassCompiler = require('sass');
const sassFactory = require('gulp-sass');
const sass = sassFactory(sassCompiler);

exports.transpSass = async () => {
    return src('./sass/*.sass').pipe(sass()).pipe(dest('output-css'));
}

exports['build:watch'] = async () => {
    return watch('./sass/*.sass', exports.transpSass)
}