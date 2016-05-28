<% if (plugins.pluginlist.includes('aurelia-auth')) { -%>
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {FetchConfig} from 'aurelia-auth';
import AppRouterConfig from 'app.router.config';

@inject(Router, FetchConfig, AppRouterConfig)
<% } -%>
export class App {
<% if (plugins.pluginlist.includes('aurelia-auth')) { -%>
    constructor(router, fetchConfig, appRouterConfig) {
      this.router = router;
      this.fetchConfig = fetchConfig;
      this.appRouterConfig = appRouterConfig;
    }

    activate() {
      this.fetchConfig.configure();
      this.appRouterConfig.configure();
    }
<% } else { -%>
    configureRouter(config, router) {
      config.title = 'Aurelia';
      config.map([
        { route: ['', 'welcome'], name: 'welcome', moduleId: 'routes/welcome/index', nav: true, title: 'Welcome' },
        { route: 'users', name: 'users', moduleId: 'routes/users/index',         nav: true,  title: 'Github Users' },
        { route: 'child-router', name: 'child-router', moduleId: 'routes/child-router/index', nav: true, title: 'Child Router' }
      ]);

      this.router = router;
    }
<% } -%>
}
