// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
// directory where should all compiled assets will be stored
    .setOutputPath('web/build/')

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath('/build')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // will output as web/build/app.js
    .addEntry('js/app', ['babel-polyfill',  'bootstrap', 'select2'])
    // allow sass/scss files to be processed
    .enableSassLoader().autoProvidejQuery()
//Ici on ajoute un thème si il y en a un nouveau
    .addStyleEntry('css/dashboard', './assets/scss/dashboard.scss')
    .enableReactPreset()
    .enableSourceMaps(!Encore.isProduction())

// create hashed filenames (e.g. app.abc123.css)
// .enableVersioning()
;
/*
todo enable cdn
if (Encore.isProduction()) {
    Encore.setPublicPath('https://my-cool-app.com.global.prod.fastly.net');

    // guarantee that the keys in manifest.json are *still*
    // prefixed with build/
    // (e.g. "build/dashboard.js": "https://my-cool-app.com.global.prod.fastly.net/dashboard.js")
    Encore.setManifestKeyPrefix('build/');
}
*/
// export the final configuration
module.exports = Encore.getWebpackConfig();
