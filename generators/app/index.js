'use strict';
var yeoman = require('yeoman-generator'),
  chalk = require('chalk'),
  yosay = require('yosay'),
  pluginGenerator = ['skeleton-es2016'];

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
      }
    ];
    return this.prompt(prompts).then(function (props) {
      switch (true) {
        case props.transpiler === 'Typescript' && props.bundler ==='Webpack':
          props.skeleton = 'skeleton-typescript-webpack';
          break;
        case props.transpiler === 'Typescript' && props.bundler ==='JSPM' && props.dotNet === true:
          props.skeleton = 'skeleton-typescript-aps.net5';
          break;
        case props.transpiler === 'Typescript' && props.bundler ==='JSPM':
          props.skeleton = 'skeleton-typescript';
          break;
        case props.bundler ==='Webpack':
          props.skeleton = 'skeleton-es2016-webpack';
          break;
        case props.bundler ==='JSPM' && props.dotNet === true:
          props.skeleton = 'skeleton-es2016-aps.net5';
          break;
        default:
          props.skeleton = 'skeleton-es2016';
      }
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  plugins: function () {
    if (pluginGenerator.includes(this.props.skeleton)) {

      let prompts = [
        {
          name: 'url',
          message: 'What will be the url of your app?',
          type: 'input',
          default: 'website.com'
        }, {
          type: 'checkbox',
          name: 'list',
          message: 'Which plugins do you want to use?',
          choices: [
            {
              name: 'aurelia-animator-css',
              checked: true
            }, {
              name: 'aurelia-dialog',
              checked: true
            }, {
              name: 'aurelia-validatejs',
              checked: true
            }, {
              name: 'aurelia-dragula',
              checked: true
            }, {
              name: 'aurelia-auth',
              checked: true
            }, {
              name: 'aurelia-google-analytics',
              checked: true
            }, {
              name: 'aurelia-notify',
              checked: true
            }, {
              name: 'aurelia-ui-virtualization',
              checked: true
            }, {
              name: 'aurelia-i18n',
              checked: true
            }, {
              name: 'aurelia-breeze',
              checked: true
            }, {
              name: 'momentjs',
              checked: true
            }
          ]
        }, {
          name: 'auth_providers',
          message: 'What authorization methods do you want to support?',
          type: 'checkbox',
          choices: [
            {
              name: 'facebook'
            }, {
              name: 'google',
              checked: true
            }, {
              name: 'github',
              checked: true
            }, {
              name: 'instagram',
              checked: true
            }, {
              name: 'linkedin'
            }, {
              name: 'twitter'
            }, {
              name: 'twitch'
            }, {
              name: 'live'
            }, {
              name: 'yahoo'
            }, {
              name: 'bitbucket'
            }
          ],
          when: function (answers) {
            console.log(answers);
            return answers.list.includes('aurelia-auth');
          }
        }, {
          name: 'googleanalytics_id',
          message: 'What is your google analytics ID?',
          type: 'input',
          default: 'analytics',
          when: function (answers) {
            return answers.list.includes('aurelia-google-analytics');
          }
        }, {
          name: 'i18n_languages',
          message: 'What languages do you want to have (insert as comma seperated values, the first entry is the default language, the second the fallback)',
          type: 'input',
          default: 'en, de, tr',
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
            return answers.list.includes('aurelia-i18n');
          }
        }
      ];

      return this.prompt(prompts).then(function (props) {
        this.plugins = props;
        // To access props later use this.plugins.someAnswer;
      }.bind(this));
    }
  },

  auths: function () {
    let prompts = [];

    if (pluginGenerator.includes(this.props.skeleton)) {
      if (this.plugins.list.includes('aurelia-auth')) {
        this.plugins.auth_providers.forEach(function (provider) {
          prompts.push({
            name: provider,
            message: 'Please enter your ' + provider + ' clientId (productionid, developementid)',
            type: 'input',
            default: 'd_' + provider,
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
    }

    return this.prompt(prompts).then(function (props) {
      this.auth = props;
      // To access props later use this.auth.someAnswer;
    }.bind(this));
  },

  config: function () {
    let root = this.props.appName;

    this.destinationRoot(root + '/');
    this.config.save();
  },

  writing: function () {
    let plugins = ['aurelia-auth'],
      current = this,
      template = {
        main: this.props,
        plugins: this.plugins
      };

    template.plugins.auth = this.auth

    current.fs.copy(
      current.templatePath(current.props.skeleton + '/static/**/*'),
      current.destinationRoot()
    );
    current.fs.copyTpl(
      current.templatePath(current.props.skeleton + '/temp/**/*'),
      current.destinationRoot(),
      template
    );
    plugins.forEach(function (plugin) {
      if (current.plugins.list.includes(plugin)) {
        current.fs.copy(
          current.templatePath(current.props.skeleton + '/plugins/' + plugin + '/static/**/*'),
          current.destinationRoot()
        );
        current.fs.copyTpl(
          current.templatePath(current.props.skeleton + 'temp/plugins/' + plugin + '/temp/**/*'),
          current.destinationRoot(),
          template
        );
      }
    });
    this.destinationRoot('./');
    if (current.plugins.list.includes('aurelia-i18n')) {
      current.plugins.i18n_languages.forEach(function (lang) {
        current.composeWith('aurelia-es2016:i18n', {args: [lang]});
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
