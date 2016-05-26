module.exports = {
  'bundles': {
    'dist/app-build': {
      'includes': [
        '[**/*.js]',
        '**/*.html!text',
        '**/*.css!text',
        '**/*.json!text',
        'momentjs'
      ],
      'options': {
        'inject': true,
        'minify': true,
        'depCache': true,
        'rev': true
      }
    },
<<<<<<< HEAD
    'dist/aurelia': {
      'includes': [
        'aurelia-framework',
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'aurelia-templating-binding',
        'aurelia-polyfills',
        'aurelia-templating-resources',
        'aurelia-templating-router',
        'aurelia-loader-default',
        'aurelia-history-browser',
        'aurelia-logging-console',
        'aurelia-configuration',
        'aurelia-validatejs',
        'aurelia-validatejs/validate-binding-behavior',
        'aurelia-ui-virtualization',
        'aurelia-dialog',
        'aurelia-dialog/resources/*.html!text',
        'aurelia-dialog/dialog.css!text',
        'aurelia-notification',
        'aurelia-google-analytics',
        'aurelia-breeze',
        'aurelia-dragula',
        'aurelia-dragula/dragula-and-drop',
        'aurelia-dragula/dragula.css!text',
        'aurelia-auth',
        'aurelia-auth/auth-filter',
        'aurelia-i18n',
        'i18next-xhr-backend',
        'bootstrap',
        'bootstrap/css/bootstrap.css!text',
        'text',
        'jquery',
        'fetch'
=======
    "dist/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-animator-css",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "bootstrap",
        "bootstrap/css/bootstrap.css!text",
        "jquery",
        "fetch"
>>>>>>> 9e2aa28546f37c98d62dbd2259dc03cf20495524
      ],
      'options': {
        'inject': true,
        'minify': true,
        'depCache': false,
        'rev': true
      }
    }
  }
};
