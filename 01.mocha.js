'use strict'
var superagent = require('superagent');

describe('App start', function() {
	it('Pagina existe',function() {
	    superagent
	      .get('http://localhost/login.html:'+80)
	      .end(function(res) {
			  console.log('res.status', res.status)
	        expect(res.status).to.equal(404);
	    });
	});

	it('suma', function(){
		//expect(true).to.equal(true);
	});


});
