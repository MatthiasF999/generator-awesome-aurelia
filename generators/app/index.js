'use strict';
var yeoman = require( 'yeoman-generator' );
var chalk = require( 'chalk' );
var yosay = require( 'yosay' );
var mkdirp = require( 'mkdirp' );
var pluginGenerator = [ 'skeleton-es2016' ];

module.exports = yeoman.Base.extend( {
	prompting: function () {
		// Have Yeoman greet the user.
		this.log( yosay(
			'Welcome to the awesome ' + chalk.red( 'aurelia' ) + ' generator!'
		) );

		let prompts = [ {
			type: 'input',
			name: 'appName',
			message: 'What is the name of your app?',
			default: 'name'
		}, {
			type: 'input',
			name: 'appDescription',
			message: 'What is your app about?',
			default: 'description'
		}, {
			type: 'input',
			name: 'git',
			message: 'What is your git repository'
		}, {
			type: 'list',
			name: 'transpiler',
			message: 'Which Transpiler do you want to use?',
			choices: [ 'ES 2016', 'Typescript' ],
			default: 0
		}, {
			type: 'list',
			name: 'bundler',
			message: 'Do you want to use JSPM or Webpack?',
			choices: [ 'JSPM', 'Webpack' ],
			default: 0
		}, {
			type: 'confirm',
			name: 'dotNet',
			message: 'Do you want to use .NET as backend?',
			default: false,
			when: function ( answers ) {
				return answers.transpiler === 'ES 2016';
			}
		} ];
		return this.prompt( prompts ).then( function ( props ) {
			switch ( true ) {
			case props.transpiler === 'Typescript' && props.bundler === 'Webpack':
				props.skeleton = 'skeleton-typescript-webpack';
				break;
			case props.transpiler === 'Typescript' && props.bundler === 'JSPM' && props.dotNet === true:
				props.skeleton = 'skeleton-typescript-aspnetcore';
				break;
			case props.transpiler === 'Typescript' && props.bundler === 'JSPM':
				props.skeleton = 'skeleton-typescript';
				break;
			case props.bundler === 'Webpack':
				props.skeleton = 'skeleton-esnext-webpack';
				break;
			case props.bundler === 'JSPM' && props.dotNet === true:
				props.skeleton = 'skeleton-esnext-aspnetcore';
				break;
			default:
				props.skeleton = 'skeleton-esnext';
			}
			// To access props later use this.props.someAnswer;
			this.props = props;
		}.bind( this ) );
	},

	plugins: function () {
		if ( pluginGenerator.includes( this.props.skeleton ) ) {
			let prompts = [ {
				name: 'url',
				message: 'What will be the url of your app?',
				type: 'input',
				default: 'website.com'
			}, {
				type: 'checkbox',
				name: 'pluginlist',
				message: 'Which plugins do you want to use?',
				choices: [ {
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
					checked: false
				}, {
					name: 'aurelia-auth',
					checked: true
				}, {
					name: 'aurelia-google-analytics',
					checked: false
				}, {
					name: 'aurelia-notify',
					checked: false
				}, {
					name: 'aurelia-ui-virtualization',
					checked: false
				}, {
					name: 'aurelia-i18n',
					checked: false
				}, {
					name: 'aurelia-breeze',
					checked: false
				}, {
					name: 'momentjs',
					checked: false
				} ]
			}, {
				name: 'authProviders',
				message: 'What authorization methods do you want to support?',
				type: 'checkbox',
				choices: [ {
					name: 'facebook',
					checked: false
				}, {
					name: 'google',
					checked: true
				}, {
					name: 'github',
					checked: false
				}, {
					name: 'instagram',
					checked: false
				}, {
					name: 'linkedin',
					checked: false
				}, {
					name: 'twitter',
					checked: false
				}, {
					name: 'twitch',
					checked: false
				}, {
					name: 'live',
					checked: false
				}, {
					name: 'yahoo',
					checked: false
				}, {
					name: 'bitbucket',
					checked: false
				} ],
				when: function ( answers ) {
					console.log( answers );
					return answers.pluginlist.includes( 'aurelia-auth' );
				}
			}, {
				name: 'googleanalytics_id',
				message: 'What is your google analytics ID?',
				type: 'input',
				default: 'analytics',
				when: function ( answers ) {
					return answers.pluginlist.includes( 'aurelia-google-analytics' );
				}
			}, {
				name: 'i18nLanguages',
				message: 'What languages do you want to have (insert as comma seperated values, the first entry is the default language, the second the fallback)',
				type: 'input',
				default: 'de, en',
				filter: function ( str ) {
					return str.split( /,\s*/ );
				},
				validate: function ( input ) {
					if ( input.length >= 2 ) {
						return true;
					}
					return 'Please enter as comma seperated values';
				},
				when: function ( answers ) {
					return answers.pluginlist.includes( 'aurelia-i18n' );
				}
			} ];

			return this.prompt( prompts ).then( function ( props ) {
				this.plugins = props;
				// To access props later use this.plugins.someAnswer;
			}.bind( this ) );
		}
	},

	auths: function () {
		let prompts = [];
		if ( pluginGenerator.includes( this.props.skeleton ) ) {
			if ( this.plugins.pluginlist.includes( 'aurelia-auth' ) ) {
				this.plugins.authProviders.forEach( function ( provider ) {
					prompts.push( {
						name: provider,
						message: 'Please enter your ' + provider + ' clientId (productionid, developementid)',
						type: 'input',
						default: 'd_' + provider,
						filter: function ( str ) {
							var array = str.split( /,\s*/ );
							if ( array.length === 1 ) {
								array.push( array[ 0 ] );
							}
							return array;
						},
						validate: function ( input ) {
							if ( input.length >= 1 && input[ 0 ] !== '' && input.length <= 2 ) {
								return true;
							}
							if ( input[ 0 ] === '' ) {
								return 'Please enter at least one value';
							}
							return 'Please enter maximum two values';
						}
					} );
				} );
			}
		}

		return this.prompt( prompts ).then( function ( props ) {
			this.auth = props;
			// To access props later use this.auth.someAnswer;
		}.bind( this ) );
	},

	config: function () {
		let root = this.props.appName;

		this.destinationRoot( root + '/' );
		this.config.set( this.props );
		this.config.set( this.plugins );
		this.config.set( this.auth );
	},

	writing: function () {
		let current = this;
		if ( pluginGenerator.includes( this.props.skeleton ) ) {
			let plugins = [ 'aurelia-auth' ];
			let template = {
				main: this.props,
				plugins: this.plugins
			};

			template.plugins.auth = this.auth;

			current.fs.copy(
				current.templatePath( current.props.skeleton + '/static/**/*' ),
				current.destinationRoot()
			);
			current.fs.copyTpl(
				current.templatePath( current.props.skeleton + '/temp/**/*' ),
				current.destinationRoot(),
				template
			);
			[ 'models', 'resources', 'services' ].forEach( element => {
				mkdirp( current.destinationRoot() + '/src/' + element );
			} );
			plugins.forEach( function ( plugin ) {
				if ( current.plugins.pluginlist.includes( plugin ) ) {
					current.fs.copy(
						current.templatePath( current.props.skeleton + '/plugins/' + plugin + '/static/**/*' ),
						current.destinationRoot()
					);
					current.fs.copyTpl(
						current.templatePath( current.props.skeleton + '/plugins/' + plugin + '/temp/**/*' ),
						current.destinationRoot(),
						template
					);
				}
			} );
			this.destinationRoot( './' );
			if ( current.plugins.pluginlist.includes( 'aurelia-i18n' ) ) {
				current.plugins.i18nLanguages.forEach( function ( lang ) {
					current.composeWith( 'awesome-aurelia:i18n', {
						args: [ lang ]
					} );
				} );
			}
		} else {
			current.fs.copy(
				current.templatePath( current.props.skeleton + '/**/*' ),
				current.destinationRoot()
			);
		}
	},
	install: function () {
		this.installDependencies( {
			bower: false,
			callback: function () {
				this.spawnCommandSync( 'jspm', [ 'install', '-y' ] );
			}.bind( this )
		} );
	},
	git: function () {
		this.spawnCommandSync( 'git', [ 'init' ] );
		this.spawnCommandSync( 'git', [ 'remote', 'add', 'origin', this.props.git ] );
		this.spawnCommandSync( 'git', [ 'add', '--all' ] );
		this.spawnCommandSync( 'git', [ 'commit', '-m', '"initial commit from generator"' ] );
		this.spawnCommandSync( 'git', [ 'push', '-u', 'origin', 'master' ] );
	},
	end: function () {
		this.spawnCommand( 'gulp', [ 'watch' ] );
	}
} );
