'use strict';

function getRandomNumber(max) {
    return Math.floor(Math.random()* Math.floor(max));
}
let result = getRandomNumber(100);

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function start() {
    let userNumber = +prompt('guess the number from 0 to 100');
    let num = result;
    console.dir(num);

    if (isNumber(userNumber) === true) {
        if (userNumber === num) {
            alert('congratulations, you guessed it');
        } else if (userNumber > num) {
            if (confirm('Try again it more') === true) {
                start();
            } else {
                alert('game over');
            }
        } else if (userNumber < num) {
            if (confirm('Try again it less') === true) {
                start();
            } else {
                alert('game over');
            }
        }
    } else {
        confirm('is not a number');
            start();
        }
    }
    

start();
