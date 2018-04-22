'use strict';

// This is just the default starter code. This is being heavily edited and the proper code will be up by 26th April.
 
const config    = require('./package.json').application
,     recursive = require('recursivejs')
,     express   = require('express')
,     app       = require('./nodeJsStarter');
 
app
    .use('express', express(), true) // core module 
    .load(config.modules) // load modules 
    .use((self) => { recursive.run(self.modules.routes, self); }) // load and run routes 
    .listen(config.port); // listen http://localhost:port. Default: 3000 
