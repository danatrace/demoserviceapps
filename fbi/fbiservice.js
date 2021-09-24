var http = require('http'); 

var server = http.createServer(function (req, res) {   
   

    if (req.url == '/data') { //check the URL of the current request

            axios.request(options).then(function (response) {
                console.log(response.data);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ message: "Hello World"})); 
                res.write(JSON.stringify(response.data));   
                res.end();  
                
            }).catch(function (error) {
                console.error(error);
            
            
        

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: "Hello World"}));  
            res.write(response.data);  
            res.end();  
        });
       
    }
   
});


var axios = require("axios").default;
var apikey  = process.env.API_KEY;
            
var options = {
method: 'GET',
url: 'https://api.fbi.gov/wanted/v1/list',
headers: {
 
}
};




server.listen(5001);

console.log('Node.js web server at port 5000 is running..')