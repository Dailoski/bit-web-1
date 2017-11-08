var obs = require('./observer');
var subject = require('./subject');

var observer1 = new obs('Marina'); 
var observer2 = new obs('Marija');

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.checkMem();


