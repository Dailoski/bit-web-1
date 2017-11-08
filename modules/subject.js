let observers = [];
var os = require('os');
    
function addObserver(observer){
    observers.push(observer);
}

function notifyAll(){
    for(let i = 0; i < observers.length; i++){
        observers[i].notify();
    }
}

function checkMem(){
    setInterval(function(){
        var mem = os.freemem();
        console.log(mem);
        if(mem <= 1666685120){
            notifyAll();
        }
    }, 1000);
}    


module.exports = {
    addObserver: addObserver,
    checkMem: checkMem
};



