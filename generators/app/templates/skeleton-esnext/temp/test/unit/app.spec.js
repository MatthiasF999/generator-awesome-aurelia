import {App} from '../../src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut;
  var mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App();
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Aurelia');
  });

  it('should have a welcome route', () => {
    expect(sut.router.routes).toContain({ route: ['', 'welcome'], name: 'welcome',  moduleId: 'routes/welcome/index', nav: true, title: 'Welcome'<% if (plugins.pluginlist.includes('aurelia-auth')) { %>, auth: false<% } %> });
  });

  it('should have a users route', () => {
    expect(sut.router.routes).toContain({ route: 'users', name: 'users', moduleId: 'routes/users/index', nav: true, title: 'Github Users'<% if (plugins.pluginlist.includes('aurelia-auth')) { %>, auth: false<% } %> });
  });

  it('should have a child router route', () => {
    expect(sut.router.routes).toContain({ route: 'child-router', name: 'child-router', moduleId: 'routes/child-router/index', nav: true, title: 'Child Router'<% if (plugins.pluginlist.includes('aurelia-auth')) { %>, auth: false<% } %> });
  });
});
