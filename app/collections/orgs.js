var Backbone = require('backbone');
var Org = require('../models/org');
var config = require('../config');

module.exports = Backbone.Collection.extend({
  model: Org,

  load: function(options) {
    this.url = config.api + '/users/' + options.user + '/orgs';
    this.fetch({
      reset: true,
      success: function(model, res, options) {
        console.log(model);
      }
    });
  }
});