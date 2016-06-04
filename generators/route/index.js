'use strict';
var yeoman = require('yeoman-generator');
var s = require('underscore.string');
var mkdirp = require('mkdirp');
var getFirst = function (includes, array, startvalue, end) {
  startvalue = startvalue || 0;
  end = end || array.length - 1;
  while (startvalue < end && !array[startvalue].includes(includes)) {
    startvalue++;
  }
  return startvalue;
};
var getPrevious = function(includes, array, startvalue, end) {
  startvalue = startvalue || array.length - 1;
  end = end++ || 0;
    console.log(array[startvalue]);
  while(startvalue > end && !array[startvalue].includes(includes)) {
    console.log(array[startvalue]);
    startvalue--;
  }
  return startvalue;
};

module.exports = yeoman.Base.extend({
  prompting: function () {
    let prompts = [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your route?'
      }, {
        type: 'confirm',
        name: 'nav',
        message: 'Shall it appear in your navigation?',
        default: true
      }, {
        type: 'confirm',
        name: 'auth',
        message: 'Do you need to be logged in, to access?',
        default: false
      }, {
        name: 'folders',
        message: 'Which modules shall be included?',
        type: 'checkbox',
        choices: [
          {
            name: 'components',
            checked: true
          }, {
            name: 'models',
            checked: true
          }, {
            name: 'resources',
            checked: true
          }, {
            name: 'routes'
          }, {
            name: 'services',
            checked: true
          }
        ]
      }
    ];
    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    let temp = {
      className: s.classify(this.props.title),
      folder: s.trim(s.dasherize(this.props.title), '-'),
      props: this.props
    };

    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('src/routes/' + temp.folder + '/index.html')
    );
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/routes/' + temp.folder + '/index.js'),
      temp
    );
    this.fs.copyTpl(
      this.templatePath('test/e2e/item.po.js'),
      this.destinationPath('test/e2e/src/routes/' + temp.folder + '/index.po.js'),
      temp
    );
    this.fs.copyTpl(
      this.templatePath('test/e2e/item.spec.js'),
      this.destinationPath('test/e2e/src/routes/' + temp.folder + '/index.spec.js'),
      temp
    );
    if (temp.props.folders.routes) {
      this.fs.copyTpl(
        this.templatePath('test/unit/child-router.spec.js'),
        this.destinationPath('test/unit/' + temp.folder + '.spec.js'),
        temp
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('test/unit/item.spec.js'),
        this.destinationPath('test/unit/' + temp.folder + '.spec.js'),
        temp
      );
    }
    temp.props.folders.forEach(element => {
      mkdirp(this.destinationPath('src/routes/' + temp.folder + '/' + element));
    });
    if (this.props.folders.includes('routes')) {
      mkdirp(this.destinationPath('test/e2e/src/routes/' + temp.folder + '/routes'));
    }
  },

  updating: function () {
    let route = (this.fs.exists('src/app.router.config.js')) ? 'src/app.router.config.js' : 'src/app.js';
    let str = this.fs.read(route).split('\n');
    let auth = this.config.get('pluginlist').includes['aurelia-auth'];

    let start = getFirst('config.map', str);
    let end = getFirst(']);', str, start);
    let row = getFirst('routes/auth', str, start, end) - 1;
    row = getPrevious('route:', str, row, start);

    let content = str[row].split(/[{}]/g);
    let worktitle = s.trim(s.dasherize(this.props.title), '-');

    content[1] = '{ route: \'' + worktitle + '\',  name: \'' + worktitle + '\', moduleId: \'routes/' + worktitle + '/index\',  nav: ' + this.props.nav + ',  title: \'' + this.props.title + '\'';
    if (auth) {
      content[1] += ',  auth: ' + this.props.auth;
    }
    content[1] += ' }';
    content = content.join('');

    if (!str[row].includes('},')) {
      str[row] = str[row].replace('}', '},');
    }

    str.splice(row + 1, 0, content);
    str = str.join('\n');

    this.fs.write(route, str);
  },

  updatingtest: function () {
    let route = 'test/unit/app.spec.js';
    let str = this.fs.read(route).split('\n');
    let row = getPrevious('sut.router.routes', str);
    let auth = this.config.get('pluginlist').includes['aurelia-auth'];

    let content = str[row].split(/[{}]/g);
    let worktitle = s.trim(s.dasherize(this.props.title), '-');

    content[1] = '{ route: \'' + worktitle + '\',  name: \'' + worktitle + '\', moduleId: \'routes/' + worktitle + '/index\',  nav: ' + this.props.nav + ',  title: \'' + this.props.title + '\'';
    if (auth) {
      content[1] += ',  auth: ' + this.props.auth;
    }
    content[1] += ' }';

    content = content.join('');

    str.splice(row + 2, 0, str[row + 1]);
    str.splice(row + 2, 0, content);
    str.splice(row + 2, 0, str[row - 1]);
    str.splice(row + 2, 0, '');
    str = str.join('\n');

    this.fs.write(route, str);
  }
});
