var express = require('express');
var app = express();


//var async = require('asyncawait/async');
//var myawait = require('asyncawait/await');
var _Promise = require('bluebird');

var sumAsync = function(a, b) {
	return new _Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(a+b);
		}, 3000);
	})
}
var sumAsync2 = function(a, b,c,cb) {
		setTimeout(function() {
		 	cb(null,a+b);
		}, 3000);
		
}
/*
var suspendable = async(function(a, b) {
	var result = myawait(sumAsync(a, b));
	console.log("r: " + result);	
	return result;
});


suspendable(2, 3).then(function(result) {
	console.log("then: " + result)
}).catch(function(err) {
	console.log("err: " + err)
})

var as2 = _Promise.promisify(sumAsync2);
as2(222, 3,4).then(function(result,arr) {
	console.log("thenas2: " ,result,arr)
}).catch(function(err) {
	console.log("erras2: " + err)
})
*/


async function suspendable2() {  
  var pageContent
  try {
    pageContent = await sumAsync(5,6);
     console.log("result1:" + pageContent);
  } catch (ex) {
    console.error("ex: " + ex)
  }
 
  return pageContent
}

suspendable2();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


