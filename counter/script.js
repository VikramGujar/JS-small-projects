let paraValue = document.getElementById('count');
let evenOdd = document.getElementById('evenodd'); // Get the even/odd paragraph
let c = 0;

function incr() {
    c++;
    paraValue.textContent = c;
    checkEvenOdd();
}

function decr() {
    if (c == 0) {
        alert('You are trying to go below 0');
    } else {
        c--;
        paraValue.textContent = c;
        checkEvenOdd();
    }
}

function reset() {
    c = 0;
    paraValue.textContent = c;
    checkEvenOdd();
}

function checkEvenOdd() {
    if (c % 2 === 0) {
        evenOdd.textContent = 'Even';
    } else {
        evenOdd.textContent = 'Odd';
    }
}
