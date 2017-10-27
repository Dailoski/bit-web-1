function validate() {
    var inputs = document.querySelectorAll('input');

    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].hasAttribute("required") && !inputs[i].value){
            inputs[i].classList.add('redBorder'); 
        }else{
            inputs[i].classList.remove('redBorder');
        }
    }
}







