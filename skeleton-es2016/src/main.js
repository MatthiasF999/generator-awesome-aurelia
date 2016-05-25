import 'bootstrap';
import {Configure} from 'aurelia-configuration';


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
    //aurelia-validatejs
    .plugin('aurelia-validatejs')
    //aurelia-ui-virtualization
    .plugin('aurelia-ui-virtualization')
    //aurelia-dialog
    .plugin('aurelia-dialog');

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
