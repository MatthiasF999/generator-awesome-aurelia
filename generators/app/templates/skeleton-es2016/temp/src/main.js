import 'bootstrap';
import {Configure} from 'aurelia-configuration';
<% if (plugin.includes('aurelia-i18n')) { -%>
  import Backend from 'i18next-xhr-backend';
<% } -%>


export function configure(aurelia) {
  let configInstance = aurelia.container.get(Configure);

  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    //plugins
    //aurelia-configuration
      .plugin('aurelia-configuration', config => {
        config.setEnvironments({
          development: ['localhost', 'dev.local'],
          staging: ['staging.website.com', 'test.staging.website.com'],
          production: ['website.com']
        });
      })
    <% if (plugin.includes('aurelia-validatejs')) { -%>
      //aurelia-validatejs
      .plugin('aurelia-validatejs')
    <% } -%>
    <% if (plugin.includes('aurelia-ui-virtualization')) { -%>
      //aurelia-ui-virtualization
      .plugin('aurelia-ui-virtualization')
    <% } -%>
    <% if (plugin.includes('aurelia-dialog')) { -%>
      //aurelia-dialog
      .plugin('aurelia-dialog')
    <% } -%>
    <% if (plugin.includes('aurelia-i18n')) { -%>
      //aurelia-i18n
      .plugin('aurelia-i18n', (instance) => {
        instance.i18next.use(Backend);
        return instance.setup(configInstance.get('i18n'));
      })
    <% } -%>
    <% if (plugin.includes('aurelia-notification')) { -%>
      //aurelia-notification
      .plugin('aurelia-notification', config => {
        config.configure(configInstance.get('notification'));
      })
    <% } -%>
    <% if (plugin.includes('aurelia-google-analytics')) { -%>
      //aurelia-google-analytics
      .plugin('aurelia-google-analytics', config => {
        config.init(configInstance.get('google-analytics.tracking-id'));
        config.attach(configInstance.get('google-analytics.config'));
      })
    <% } -%>
    <% if (plugin.includes('aurelia-breeze')) { -%>
      //aurelia-breeze
      .plugin('aurelia-breeze')
    <% } -%>
    <% if (plugin.includes('aurelia-dragula')) { -%>
      //aurelia-dragula
      .plugin('aurelia-dragula')
    <% } -%>
    <% if (plugin.includes('aurelia-animator-css')) { -%>
      //aurelia-animator-css
      .plugin('aurelia-animator-css')
    <% } -%>
    <% if (plugin.includes('aurelia-auth')) { -%>
      //aurelia-auth
      .plugin('aurelia-auth', (baseConfig)=>{
        baseConfig.configure(configInstance.get('auth'));
      })
    <% } -%>;

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
