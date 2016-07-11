module.exports = {
  'bundles': {
    'dist/app-build': {
      'includes': [
<% if (plugins.pluginlist.includes('aurelia-validatejs')) { -%>
        'momentjs',
<% } -%>
        '[**/*.js]',
        '**/*.html!text',
        '**/*.css!text',
        '**/*.json!text'
      ],
      'options': {
        'inject': true,
        'minify': true,
        'depCache': true,
        'rev': true
      }
    },
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
<% if (plugins.pluginlist.includes('aurelia-validatejs')) { -%>
        'aurelia-validatejs',
        'aurelia-validatejs/validate-binding-behavior',
<% } -%>
<% if (plugins.pluginlist.includes('aurelia-ui-virtualization')) { -%>
        'aurelia-ui-virtualization',
<% } -%>
<% if (plugins.pluginlist.includes('aurelia-dialog')) { -%>
        'aurelia-dialog',
        'aurelia-dialog/resources/*.html!text',
        'aurelia-dialog/dialog.css!text',
<% } -%>
<% if (plugins.pluginlist.includes('aurelia-notification')) { -%>
        'aurelia-notification',
        'humane-js',
<% } -%>
<% if (plugins.pluginlist.includes('aurelia-google-analytics')) { -%>
        'aurelia-google-analytics',
<% } -%>
<% if (plugins.pluginlist.includes('aurelia-breeze')) { -%>
        'aurelia-breeze',
<% } -%>
<% if (plugins.pluginlist.includes('aurelia-dragula')) { -%>
        'aurelia-dragula',
        'aurelia-dragula/dragula-and-drop',
        'aurelia-dragula/dragula.css!text',
<% } -%>
<% if (plugins.pluginlist.includes('aurelia-auth')) { -%>
        'aurelia-auth',
        'aurelia-auth/auth-filter',
<% } -%>
<% if (plugins.pluginlist.includes('aurelia-i18n')) { -%>
        'aurelia-i18n',
        'i18next-xhr-backend',
<% } -%>
        'bootstrap',
        'bootstrap/css/bootstrap.css!text',
        'text',
        'jquery',
        'fetch'
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
