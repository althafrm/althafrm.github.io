let mix = require('laravel-mix');

mix
    .postCss('assets/css/main.css', 'dist/css', [
        require('postcss-custom-properties')
    ])
    .js('assets/js/main.js', 'dist/js');
