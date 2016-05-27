module.exports = {
  'bundles': {
    'dist/app-build': {
      'includes': [
        <% if (plugin.includes('aurelia-validatejs')) { %>
          'momentjs',
        <% } %>
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
        <% if (plugin.includes('aurelia-validatejs')) { %>
          'aurelia-validatejs',
          'aurelia-validatejs/validate-binding-behavior',
        <% } %>
        <% if (plugin.includes('aurelia-ui-virtualization')) { %>
          'aurelia-ui-virtualization',
        <% } %>
        <% if (plugin.includes('aurelia-dialog')) { %>
          'aurelia-dialog',
          'aurelia-dialog/resources/*.html!text',
          'aurelia-dialog/dialog.css!text',
        <% } %>
        <% if (plugin.includes('aurelia-notification')) { %>
          'aurelia-notification',
          'humane-js',
        <% } %>
        <% if (plugin.includes('aurelia-google-analytics')) { %>
          'aurelia-google-analytics',
        <% } %>
        <% if (plugin.includes('aurelia-breeze')) { %>
          'aurelia-breeze',
        <% } %>
        <% if (plugin.includes('aurelia-dragula')) { %>
          'aurelia-dragula',
          'aurelia-dragula/dragula-and-drop',
          'aurelia-dragula/dragula.css!text',
        <% } %>
        <% if (plugin.includes('aurelia-auth')) { %>
          'aurelia-auth',
          'aurelia-auth/auth-filter',
        <% } %>
        <% if (plugin.includes('aurelia-i18n')) { %>
          'aurelia-i18n',
          'i18next-xhr-backend',
        <% } %>
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
