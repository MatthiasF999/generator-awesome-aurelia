module.exports = {
  'list': [
    'index.html',
    '_styles/styles.css',
<% if (plugins.pluginlist.includes('aurelia-i18n')) { -%>
    'locales/**/*.json',
<% } -%>
    'config.js',
    'favicon.ico',
    'LICENSE',
    'jspm_packages/system.js',
    'jspm_packages/system.js.map',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    'jspm_packages/npm/font-awesome@4.6.3/css/font-awesome.min.css',
    'jspm_packages/npm/font-awesome@4.6.3/fonts/*',
    'jspm_packages/github/github/fetch@0.11.0.js',
    'jspm_packages/github/github/fetch@0.11.0/fetch.js',
    'jspm_packages/github/twbs/bootstrap@3.3.6/fonts/*'
  ]
};
