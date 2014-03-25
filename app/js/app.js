/*global cordova*/
define(['jquery', 'app/db', 'app/hello'],
	function ($, db, hello) {

		// Start the app when the device is ready
		var startup = function() {
			// Wait for document ready
			$(function() {
				alert('beginn of startup');
				db.startup();
				hello.startup();
				hello.show();
				alert('end of startup');
			});
		};

		// Poll for Phonegap (Cordova) to avoid race conditions
		// with the deviceready event. For local development,
		// startup may need to be called directly.
		(function checkCordova() {
			console.log('checkCordova');
			// Check if Cordova exists
			if (window.phonegap) {
				// Listen for the deviceready event
				document.addEventListener('deviceready', startup, false);
			} else {
				// If Cordova does not exist, check again in 1/60th second
				setTimeout(checkCordova, 16);
			}
		}());

	}
);
