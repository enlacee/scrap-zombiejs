
var Zombie = require('zombie');
// var assert = require('assert');

//Browser.localhost('localhost', 8000);
const browser = new Zombie();
// Load the page from localhost
browser.visit('http://localhost:8000/index.html', function() {
	console.log('### titulo tag title? >> ', browser.text('title'));
	console.log('INICIO');
	console.log(browser.html());
	// Fill email, password and submit form
	browser.
		fill('email', 'zombie@underworld.dead').
		fill('password', 'eat-the-living').
		pressButton('login', function() {
			// Form submitted, new page loaded.
			// assert.equal(browser.text("title"), "privado");
			// console.log('### titulo tag title? >> ', browser.text('title'));
			console.log('FIN pagina2 1');
			console.log(browser.html());
			console.log('FIN pagina2 2');
		});



});
