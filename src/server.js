var https = require('https');
var fs = require('fs');

var https_options = {
    key: fs.readFileSync("/home/rj0605/Udemy/React/Portfolio-master/Portfolio-master/domain.key"),
    cert: fs.readFileSync("C:\Users\rjrus\Documents\StartUps\rrussell_tech\rrussell_tech.crt"),
    ca: [
            fs.readFileSync("C:\Users\rjrus\Documents\StartUps\rrussell_tech\SectigoRSADomainValidationSecureServerCA.crt"),
            fs.readFileSync("C:\Users\rjrus\Documents\StartUps\rrussell_tech\USERTrustRSAAAACA.crt") 
         ]
  
};

https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("Welcome to Node.js HTTPS Servern");
}).listen(8443)
   

// const express = require('express');
// App = express();
// App.get('/', (req, res) => {
// res.send("Welcome to the home page");
// });

// App.listen(3000, () => {
// console.log("Wazzzzapppp");
// });
