var myVar;

function toggleIt() {
    document.getElementById('demo').classList.toggle("black"); 

}

function automatic() {
    
    if(!myVar){
        myVar = setInterval(function() {toggleIt()}, 1000);
        document.getElementById('off').textContent = 'Off';
    }
    else {
        clearInterval(myVar);
        myVar = null;
        document.getElementById('off').textContent = 'Turn On Automatic Toggle';
    }
}


