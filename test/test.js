import {sayHello} from '../js/main.js';

QUnit.module('hello', function() {

    QUnit.test('make sure the hello function says hello', function(assert) {
        var result = sayHello();
        assert.equal(result,  'Hello, thanks for viewing my about me page :)');
    });
    QUnit.test('sayHello should return a string of correct length', function(assert) {
        var result = sayHello();
        assert.equal(result.length, 42, 'The result has the expected length of 42 characters');
    });
    
    QUnit.test('Profile image should be present', function(assert) {
        const img = document.querySelector('.profile-pic');
        assert.ok(img, 'Profile image is present');
    });

});
