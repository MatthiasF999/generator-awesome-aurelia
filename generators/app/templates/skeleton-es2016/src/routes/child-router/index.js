export class ChildRouter {
  heading = 'Child Router';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: '../welcome/index',       nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',         moduleId: '../users/index',         nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router',  moduleId: './index',  nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
