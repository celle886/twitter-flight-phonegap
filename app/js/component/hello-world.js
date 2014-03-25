define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(helloWorld);

  /**
   * Module function
   */

  function helloWorld() {
    this.defaultAttrs({

    });

    this.after('initialize', function () {
    	this.$node.find('h1').text('Hello, world!');
    });
  }

});
