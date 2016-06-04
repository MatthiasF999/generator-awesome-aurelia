export class <%= className %> {
  heading = '<%= props.title %>'

  constructor() {

  }

<% if (props.folders.includes('router')) { -%>
  configureRouter(config, router) {
    config.map([

    ]);

    this.router = router;
  }
<% } -%>
}
