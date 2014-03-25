define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var HelloWorld = require('component/hello-world');

  /**
   * Module exports
   */

  //return initialize;

  /**
   * Module function
   */

  function initialize() {
	  HelloWorld.attachTo(document);
  }
  
  (function checkCordova() {
		console.log('checkCordova');
		// Check if Cordova exists
		if (window.cordova) {
			// Listen for the deviceready event
			document.addEventListener('deviceready', initialize, false);
		} else {
			// If Cordova does not exist, check again in 1/60th second
			setTimeout(checkCordova, 16);
		}
	}());

});
