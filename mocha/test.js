var myFunc = function (a, b) {
    return a + b;
};

var doSomethingSlow = function (callback) {
    setTimeout(callback('done'), 2000);
};

var chai = require('chai');

chai.should();

describe('myFunc function', function () {
    describe('core functionality', function () {
        it('should return the sum of par', function () {
            var actual = myFunc(5, 6);
            actual.should.not.equal(10);
        });
    });
});

describe('doSomethingSlow', function () {
    it('should print "done" when completed', function (completed) {
        doSomethingSlow(function (result) {
            result.should.equal('done');
            completed();
        });
    });
});