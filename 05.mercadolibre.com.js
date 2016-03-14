'use strict';
var Zombie = require('zombie');
// var assert = require('assert');

//Browser.localhost('localhost', 8000);
const browser = new Zombie();
// Load the page from localhost

browser.visit('https://www.mercadolibre.com/jms/mpe/lgz/login?go=http://www.mercadolibre.com.pe/gz/home/logged?display=page', function() {
	console.log('### titulo tag title? >> ', browser.text('title'));

	// Fill email, password and submit form
	browser.fill('user_id', 'acopitan');
	browser.fill('password', 'google#123');

	browser.
		fill('user_id', 'acopitan').
		fill('password', 'google#123').
		pressButton('confirm', function() {
			console.log('### titulo tag title? >> ', browser.text('title'));

			console.log('FIN pagina2 1');
			console.log(browser.html());
			console.log('FIN pagina2 2');
		});



});

/*
browser.visit('https://myaccount.mercadolibre.com.pe/summary/', function() {
	console.log('### titulo tag title? >> ', browser.text('title'));
	console.log('HTML');
	var htmltext = browser.html();
	// console.log(browser.html());
	console.log('HTML');

	var fs = require('fs');
	fs.writeFile("05.mercadolibre.com.js.txt", htmltext, function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	});

});
*/
