var inputElement = document.querySelector('input');
var divEl = document.querySelector('div');

var counter = 0;

function sendMsg(){
    if(inputElement.value){
        var outdiv = document.createElement('div');
        var msgEl = document.createElement('p');
        msgEl.textContent = inputElement.value;
        
        inputElement.value = '';  
        outdiv.appendChild(msgEl);
        divEl.appendChild(outdiv);  
        if(counter%2 === 0){
            msgEl.classList.add('chat');
        }
        counter++
        
    }        
}

