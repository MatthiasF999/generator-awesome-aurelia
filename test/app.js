'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var deps = [
  [helpers.createDummyGenerator(), 'awesome-aurelia:i18n']
];

describe('generator-awesome-aurelia:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withGenerators(deps)
      .withOptions({
        'skip-install': true,
        'skip-git': true
      })
      .withPrompts({
        appName: 'name',
        appDescription: 'description',
        transpiler: 'ES 2016',
        bundler: 'JSPM',
        dotNet: false,
        url: 'website.com',
        pluginlist: ['aurelia-animator-css', 'aurelia-dialog', 'aurelia-validatejs', 'aurelia-dragula', 'aurelia-auth', 'aurelia-notify', 'aurelia-ui-virtualization', 'aurelia-i18n', 'aurelia-breeze', 'momentjs'],
        authProviders: ['github'],
        i18nLanguages: 'de, en',
        google: 'test1, test2'
      })
      .toPromise();
  });

  it('creates static root files', function () {
    assert.file([
      '.editorconfig',
      '.eslintignore',
      '.eslintrc',
      '.gitignore',
      '.gitlab-ci.yml',
      '.npmignore',
      'aurelia.protractor.js',
      'config.js',
      'favicon.ico',
      'gulpfile.js',
      'index.js',
      'jsconfig.json',
      'karma.conf.js',
      'protractor.conf.js',
      'README.md',
      'wallaby.js'
    ]);
  });

  it('creates static building files', function () {
    assert.file([
      'build/.eslintrc',
      'build/args.js',
      'build/babel-options.js',
      'build/paths.js',
      'build/postcss.js',
      'build/tasks/build.js',
      'build/tasks/bundle.js',
      'build/tasks/clean.js',
      'build/tasks/dev.js',
      'build/tasks/e2e.js',
      'build/tasks/export-release.js',
      'build/tasks/lint.js',
      'build/tasks/prepare-release.js',
      'build/tasks/serve.js',
      'build/tasks/test.js',
      'build/tasks/watch.js'
    ]);
  });

  it('creates static doc files', function () {
    assert.file([
      'doc/api.json',
      'doc/CHANGELOG.md'
    ]);
  });

  it('creates static source files', function () {
    assert.file([
      'src/.eslintrc',
      'src/components/nav-bar.html',
      'src/routes/child-router/index.js',
      'src/routes/users/index.js',
      'src/routes/users/index.html',
      'src/routes/users/services/blur-image.js',
      'src/routes/welcome/index.js',
      'src/routes/welcome/index.html'
    ]);
  });

  it('creates static style files', function () {
    assert.file([
      'styles/styles.css'
    ]);
  });

  it('creates static test files', function () {
    assert.file([
      'test/e2e/src/demo.spec.js',
      'test/e2e/src/skeleton.po.js',
      'test/e2e/src/welcome.po.js',
      'test/unit/.eslintrc',
      'test/unit/child-router.spec.js',
      'test/unit/setup.js',
      'test/unit/users.spec.js'
    ]);
  });

  it('creates dynamic root files', function () {
    assert.file([
      'index.html',
      'package.json'
    ]);
  });

  it('creates dynamic build files', function () {
    assert.file([
      'build/bundles.js',
      'build/export.js'
    ]);
  });

  it('creates dynamic source files', function () {
    assert.file([
      'src/app.js',
      'src/app.html',
      'src/main.js',
      'src/config/config.json',
      'src/routes/child-router/index.html'
    ]);
  });

  it('creates dynamic test files', function () {
    assert.file([
      'test/unit/app.spec.js'
    ]);
  });

  it('creates static auth files', function () {
    assert.file([
      'src/routes/auth/login.js',
      'src/routes/auth/logout.js',
      'src/routes/auth/logout.html',
      'src/routes/auth/signup.js',
      'src/routes/auth/signup.html',
      'src/app.router.config.js'
    ]);
  });

  it('creates dynamic auth files', function () {
    assert.file([
      'src/routes/auth/login.html'
    ]);
  });
});
