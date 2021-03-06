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
    .addStyleEntry('css/base', './assets/scss/base.scss')
    .addStyleEntry('css/devicons', './web/icons/devicons/css/devicons.scss')
    .addStyleEntry('css/simple-line-icons', './web/icons/simple-line-icons/scss/simple-line-icons.scss')
    .addStyleEntry('css/font-awesome', './web/icons/font-awesome/scss/font-awesome.scss')
    .enableReactPreset()
    .enableSourceMaps(!Encore.isProduction());

// export the final configuration
module.exports = Encore.getWebpackConfig();
