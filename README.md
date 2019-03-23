# StockInvestor

Technical Specifications
------------------------
Simple JavaScript solution for Stock Investors.  You can get current stock prices, make faux transactions, and filter your previous transactions  
Mostly vanilla javascript.  VueJS is used for the data binding, and requireJS for module loading and dependency injection.  
Web services are hosted using node-express

## Installation
So long as you have node installed, you should only need to do the following.  
Modify start_server.js to indicate where you have downloaded the project and want to run it from.   
Run the start_server.cmd file or naviage to start_server.js and run node start_server.js  
From there you should be able to run from your browser using the following url : http://localhost:8081  

## File Structure
 
- app - main.js as entry point.  services.js for interaction with express REST services
- node_modules - A few dependencies for running our express web services, and serving the application
- index.html - Our UI in this case.  Includes references to CSS and requireJS
- server.js - This is our web server, and our web services for CRUD operations.  Also hosts our data in this case. 
- start_server.js, start_server.cmd - This specifies the port and directory to serve the web application from.  Can spin up multiple instances at one time. 
- app.js - RequireJS modules referenced here.


