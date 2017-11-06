class Observer {
    constructor(name) {
        this.name = name;
    }
    notify(number) {
        console.log(`${this.name}:  ${number} je deljiv sa 11.`);
    }
};


var subject = function () {
    var observers = [];

    function notifyAll(message) {
        for (let i = 0; i < observers.length; i++) {
              observers[i].notify(message);
        }
    }

    function addObserver(observer) {
        observers.push(observer);
    }

    function devided() {
        for (let i = 0; i < 100; i++) {
            if (i % 11 === 0) {
                notifyAll(i);
            }
        }
    }

    return {
        devided: devided,
        addObserver: addObserver
    };
};

//test 
// var subject = function () {
//     var observers = [];

//     function addObserver(observer) {
//         observers.push(observer);
//     }

//     function devided() {
//         for (let i = 0; i < 100; i++) {
//             if (i % 11 === 0) {
//                 for(let j = 0; j< observers.length; j++){
//                     observers[j].notify(i);
//                 }
//             }
//         }
//     }

//     return {
//         devided: devided,
//         addObserver: addObserver
//     };
// };


let observer1 = new Observer('lampica');
let observer2 = new Observer('sirena');

let subject1 = subject();

subject1.addObserver(observer1);
subject1.addObserver(observer2);

subject1.devided();

