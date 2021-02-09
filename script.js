'use strict';

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));

}
//! function wrapping
function start() {
    let count = 10;

    let isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    let num = getRandomNumber(100);

    //? function main internal
    
    function newStart() {
        let userNumber = prompt('guess the number from 0 to 100');
        if (!isNumber(userNumber)) {
            userNumber = Number(userNumber);
            if(confirm('is not a number')){
                newStart();
            }else{
                alert('game over');
            }
            
        }else if(count === 0) {
            if (confirm('Ended, do you want to play again?')) {
                start();
            }else{
                alert('game over');
            }
        }else if (userNumber === num) {
            if (confirm('Congratulations, you guessed it !!! Would you like to play more?')) {
                start();
            }
        } else if (userNumber > num) {
            count--;
            if (confirm('The guessed number is less, there are still attempts ' + count)) {
                newStart();
            } else {
                alert('game over');
            }
        } else if (userNumber < num) {
            count--;
            if (confirm('The guessed number is greater, there are still attempts ' + count)) {
                newStart();
            } else {
                alert('game over');
            }
        }
    }
    console.dir(newStart);
    console.log(num);
    newStart();
}
start();
