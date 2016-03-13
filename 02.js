'use strict';
require ('jasmine-node')
var Browser = require('zombie');

Browser.localhost('localhost', 8000);
const browser = new Browser();

describe("testing with zombie", function() {

browser.visit('/index.html', function() {
	console.log(browser.location.href);
	console.log(browser.query("input[name='email']"));
	//
	browser.assert.success();
	browser.assert.text('title', 'My Awesome Site');
});


});
