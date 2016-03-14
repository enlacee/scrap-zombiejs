'use strict';
var Zombie = require('zombie');
// var assert = require('assert');

//Browser.localhost('localhost', 8000);
const browser = new Zombie();
// Load the page from localhost
browser.visit('https://www.facebook.com/login.php', function() {
	console.log('### titulo tag title? >> ', browser.text('title'));

	// Fill email, password and submit form
	browser.
		fill('email', 'anibal.copitan@yainso.com').
		fill('pass', 'google#123').
		pressButton('login', function() {
			console.log('### titulo tag title? >> ', browser.text('title'));

			 console.log('FIN pagina2 1');
			 console.log(browser.html());
			 console.log('FIN pagina2 2');
		});



});
