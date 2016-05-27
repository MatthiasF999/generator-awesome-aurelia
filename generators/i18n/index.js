'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('name', {type: String, required: true});
  },
  writing: function () {
    this.fs.copy(
      this.templatePath('*.json'),
      this.destinationPath('locales/' + this.name)
    );
  }
});
