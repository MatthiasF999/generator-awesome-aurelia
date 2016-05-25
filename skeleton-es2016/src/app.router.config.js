import {AuthorizeStep} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export default class {

  constructor(router) {
    this.router = router;
  }

  configure() {
    let appRouterConfig = function(config) {
      config.title = 'Aurelia';
      config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.

      config.map([
        { route: ['', 'welcome'], name: 'welcome',      moduleId: 'routes/welcome/index',       nav: true,  title: 'Welcome' },
        { route: 'users',         name: 'users',        moduleId: 'routes/users/index',         nav: true,  title: 'Github Users' },
        { route: 'child-router',  name: 'child-router', moduleId: 'routes/child-router/index',  nav: true,  title: 'Child Router',  auth: true},
        { route: 'signup',                              moduleId: 'routes/auth/signup',         nav: false, title: 'Signup' },
        { route: 'login',                               moduleId: 'routes/auth/login',          nav: false, title: 'Login' },
        { route: 'logout',                              moduleId: 'routes/auth/logout',         nav: false, title: 'Logout' }

      ]);
    };

    this.router.configure(appRouterConfig);
  }
}
