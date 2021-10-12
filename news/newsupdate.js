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


    if (req.url == '/') { //check the URL of the current request
  
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Hello World"}));  
        res.end();     
    }
   
});


var axios = require("axios").default;


var apikey  = process.env.apikey;

var options = {
method: 'GET',
url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=iphone&num=100',
headers: {
    'x-user-agent': 'desktop',
    'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    'x-rapidapi-key': apikey
}
};




server.listen(8086);

console.log('Node.js web server at port 8080 is running..')