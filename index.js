var htmlbars = require('htmlbars');

module.exports = function(source) {
  if (this.cacheable) this.cacheable();
  return htmlbars.compile(source);
};