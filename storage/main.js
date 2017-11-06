
var counter = 0;
function count() {
    if (typeof Storage !== "undefined") {
        console.log('The storage is supported.');
    }

    var localcnt = localStorage.getItem('counter');
    if (localcnt) {
        counter = JSON.parse(localcnt);
    } else {
        counter = 0;
    }
    counter++;
    localStorage.setItem('counter', counter);
    document.getElementById('btn').innerHTML = counter;
} 
