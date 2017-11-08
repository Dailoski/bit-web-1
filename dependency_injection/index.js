var transport = require('./entities');

var user = function(transportService){
    var go = 'Australia';    
    transportService.transportTo(go);
};


user(new transport.transportService());
