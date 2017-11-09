import UserThings from './adapterUsers';
import ReposThings from './adapterRepos';

class Data{
    constructor(name){
        this.name = name;
    }

    run(name) {
        
        new UserThings().getThings(name, function(data){
            console.log(data);
        });
    }
}

let marko = new Data('Marko');
marko.run();



