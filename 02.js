'use strict';
require ('jasmine-node');
var Browser = require('zombie');
var assert = require('assert');

Browser.localhost('localhost', 8000);
const browser = new Browser();

describe('testing with zombie', function() {

browser.visit('/index.html', function() {
	console.log(browser.location.href);
	// 01 test
	console.log('### web se cargo? >> ', browser.assert.success());
	console.log('### titulo tag title? >> ', browser.text('title'));
	// console.log('### titulo tag title?', browser.text('title'));

	// 02 test : si ocurre un error al no encontrar
	// Make sure we have an element with the ID brains.
	assert.ok(browser.querySelector('#content'));
	assert.equal(browser.text("title"), 'Hello World Login');
	var options = browser.queryAll('body h1');
	// Show me the document contents.

	// 03 jquery
	// append script tag
	var injectedScript = browser.document.createElement("script");
	injectedScript.setAttribute("type","text/javascript");
	injectedScript.setAttribute("src", "http://code.jquery.com/jquery-1.11.0.min.js");
	browser.body.appendChild(injectedScript);
	// console.log(browser.html());
	console.log('### selector jquery >> ');
	console.log(browser.evaluate("$('h1').text()"));

	// 04 full javascript
	console.log('### selector javascript >> ');
	console.log(browser.body.getElementsByTagName('h1')[0].innerHTML);

});


});
