//  x --- Set up a node project using npm init, create an http server and respond on port 3000 with “Hello world!”.
//  Test the application locally in the browser.
// Note: make sure you use listen(process.env.PORT || 3000); in order to support heroku’s automatic port assignment.
// Follow this tutorial to get heroku set up on your machine: https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction
// post the assignment to both GitHub and Heroku and send these URLs to your instructors.
var express = require ('express');

var app = express();

var path = require( 'path' );

var server = app.listen( process.env.PORT || 3000, function(){
  console.log('teds server listening on port 3000');
});

app.get( '/', function(req, res){
  console.log ('hello ted from base url get');
  res.writeHead(200);
  res.write('you are in the base url, ted');
  res.end();
});
