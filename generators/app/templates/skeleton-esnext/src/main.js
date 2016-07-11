import 'bootstrap';
import {Configure} from 'aurelia-configuration';
import Backend from 'i18next-xhr-backend';

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
		.plugin('aurelia-dialog')
		//aurelia-i18n
		.plugin('aurelia-i18n', (instance) => {
			instance.i18next.use(Backend);
			return instance.setup(configInstance.get('i18n'));
		})
		//aurelia-notification
		.plugin('aurelia-notification', config => {
			config.configure(configInstance.get('notification'));
		})
		//aurelia-google-analytics
		.plugin('aurelia-google-analytics', config => {
			config.init(configInstance.get('google-analytics.tracking-id'));
			config.attach(configInstance.get('google-analytics.config'));
		})
		//aurelia-breeze
		.plugin('aurelia-breeze')
		//aurelia-dragula
		.plugin('aurelia-dragula')
		//aurelia-auth
		.plugin('aurelia-auth', (baseConfig)=>{
			baseConfig.configure(configInstance.get('auth'));
		});
  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
