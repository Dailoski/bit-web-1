class Observer{
    constructor(name){
        this.name = name;
    }
  
    notify(){
        console.log(`${this.name} :memory overload.`);
    }
}

module.exports = Observer;