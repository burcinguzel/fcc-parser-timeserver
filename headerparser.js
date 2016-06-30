 	var http = require('http');
	var server = http.createServer(function(request, response) {
	    
	      if (request.method === 'GET' && request.url === '/api/whoami/') {
             	console.log(request);
             	var sftwr= request.headers['user-agent'].substring(request.headers['user-agent'].indexOf("(")+1,request.headers['user-agent'].indexOf(")"));
             	var lang = request.headers['accept-language'].substring(0,request.headers['accept-language'].indexOf(","));
            	response.write(JSON.stringify({ipaddress:request.headers['x-forwarded-for'] , language:lang , software:sftwr }));
            	response.end();
         } else {
                 response.statusCode = 404;
                 response.write("Cannot GET "+request.url);
                 response.end();}

	
});
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Parser works on: ", addr.address + ":" + addr.port);
});

