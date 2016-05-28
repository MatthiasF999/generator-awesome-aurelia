'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var s = require('underscore.string');
var getFirst = function(includes, array, startvalue, end) {
  startvalue = startvalue || 0;
  end = end || array.length;
  while(startvalue < end && !array[startvalue].includes(includes)) startvalue++;
  return startvalue;
}

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome ' + chalk.red('aurelia') + ' generator!'
    ));

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
      folder: s.trim(s.dasherize(this.props.title), '-')
    }
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('src/' + temp.folder + '/index.html')
    );
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/' + temp.folder + '/index.js'),
      temp
    );
  },

  updating: function () {
    let route = (this.fs.exists('src/app.router.config.js')) ? 'src/app.router.config.js' : 'src/app.js';
    let str = this.fs.read(route).split('\n');

    let start = getFirst('config.map', str);
    let end = getFirst(']);', str, start);
    let row = getFirst('routes/auth', str, start, end) - 1;

    let content = str[row].split(/[{}]/g);
    let worktitle = s.trim(s.dasherize(this.props.title), '-');

    content[1] = '{ route: \'' + worktitle + '\',  name: \'' + worktitle + '\', moduleId: \'routes/' + worktitle + '/index\',  nav: ' + this.props.nav + ',  title: \'' + this.props.title + '\',  auth: ' + this.props.auth + ' }';
    content = content.join('');

    if(!str[row].includes('},')) {
      str[row] = str[row].replace('}', '},');
    }

    str.splice(row + 1, 0, content);
    str = str.join('\n');

    this.fs.write(route, str);
  }
});
