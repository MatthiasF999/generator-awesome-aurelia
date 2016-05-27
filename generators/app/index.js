'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome ' + chalk.red('aurelia') + ' generator!'
    ));

    let prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'What is the name of your app?'
      }, {
        type: 'list',
        name: 'transpiler',
        message: 'Which Transpiler do you want to use?',
        choices: ['ES 2016', 'Typescript'],
        default: 0
      }, {
        type: 'list',
        name: 'bundler',
        message: 'Do you want to use JSPM or Webpack?',
        choices: ['JSPM', 'Webpack'],
        default: 0
      }, {
        type: 'confirm',
        name: 'dotNet',
        message: 'Do you want to use .NET as backend?',
        default: false,
        when: function (answers) {
          return answers.transpiler === 'ES 2016';
        }
      }, {
        type: 'checkbox',
        name: 'plugins',
        message: 'Which plugins do you want to use?',
        choices: [
          'aurelia-animator-css',
          'aurelia-dialog',
          'aurelia-validatejs',
          'aurelia-dragula',
          'aurelia-auth',
          'aurelia-google-analytics',
          'aurelia-notify',
          'aurelia-ui-virtualization',
          'aurelia-i18n',
          'aurelia-breeze',
          'momentjs'
        ],
        when: function (answers) {
          return answers.dotNet === false;
        }
      }, {
        name: 'auth_providers',
        message: 'What authorization methods do you want to support?',
        type: 'checkbox',
        choices: [
          'facebook',
          'google',
          'github',
          'instagram',
          'linkedin',
          'twitter',
          'twitch',
          'live',
          'yahoo',
          'bitbucket'
        ],
        when: function (answers) {
          return answers.plugins.includes('aurelia-auth');
        }
      }, {
        name: 'configuration_urls',
        message: 'What will be the urls of your app (insert as comma seperated values)',
        type: 'input',
        filter: function (str) {
          if (str === '') {
            str = 'webseite.tld';
          }
          return str.split(/,\s*/);
        },
        validate: function (input) {
          if (input.every(function (element) {
            return element.split('.').length >= 2;
          })) {
            return true;
          }
          return 'Please enter valid urls';
        },
        when: function (answers) {
          return answers.plugins.includes('aurelia-configuration');
        }
      }, {
        name: 'googleanalytics_id',
        message: 'What is your google analytics ID?',
        type: 'input',
        when: function (answers) {
          return answers.plugins.includes('aurelia-google-analytics');
        }
      }, {
        name: 'i18n_languages',
        message: 'What languages do you want to have (insert as comma seperated values, the first entry is the default language, the second the fallback)',
        type: 'input',
        filter: function (str) {
          return str.split(/,\s*/);
        },
        validate: function (input) {
          if (input.length >= 2) {
            return true;
          }
          return 'Please enter as comma seperated values';
        },
        when: function (answers) {
          return answers.plugins.includes('aurelia-i18n');
        }
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  auths: function () {
    let prompts = [];

    if (this.props.plugins.includes('aurelia-auth')) {
      this.props.auth_providers.forEach(function (provider) {
        prompts.push({
          name: provider,
          message: 'Please enter your ' + provider + ' clientId (productionid, developementid)',
          type: 'input',
          filter: function (str) {
            var array = str.split(/,\s*/);
            if (array.length === 1) {
              array.push(array[0]);
            }
            return array;
          },
          validate: function (input) {
            if (input.length >= 1 && input[0] !== '' && input.length <= 2) {
              return true;
            }
            if (input[0] === '') {
              return 'Please enter at least one value';
            }
            return 'Please enter maximum two values';
          }
        });
      });
    }

    return this.prompt(prompts).then(function (props) {
      this.props.auth = props;
      // To access props later use this.props.someAnswer;
    }.bind(this));
  },

  config: function () {
    var root = this.props.app_name;
    this.destinationRoot(root + '/');
    this.config.save();
  },

  writing: function () {
    console.log('Creating currently not implemented');
    return true;
    let plugins = ['aurelia-auth', 'aurelia-configuration'];
    let current = this;

    current.fs.copy(
      current.templatePath('static/**/*'),
      current.destinationRoot()
    );
    current.fs.copyTpl(
      current.templatePath('temp/main/**/*'),
      current.destinationRoot(),
      current.props
    );
    plugins.forEach(function (element) {
      if (current.props.plugins.includes(element)) {
        current.fs.copy(
          current.templatePath('temp/plugins/' + element + '/static/**/*'),
          current.destinationRoot()
        );
        current.fs.copyTpl(
          current.templatePath('temp/plugins/' + element + '/temp/**/*'),
          current.destinationRoot(),
          current.props
        );
      }
    });
    this.destinationRoot('./');
    if (current.props.plugins.includes('aurelia-i18n')) {
      current.props.i18n_languages.forEach(function (element) {
        current.composeWith('aurelia-es2016:i18n', {args: [element]});
      });
    }
  },
  install: function () {
    // this.installDependencies();
  },
  end: function () {
    // this.spawnCommand('jspm', ['install', '-y']);
  }
});
