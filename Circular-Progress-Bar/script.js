let number = document.getElementById('number');
let counter = 0;
let interval1 = setInterval(() => {
    if (counter == 65) {
        clearInterval(interval1);
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30);

let number2 = document.getElementById('number-2');
let counters = 0;
let interval2 = setInterval(() => {
    if (counters == 70) {
        clearInterval(interval2);
    } else {
        counters += 1;
        number2.innerHTML = counters + "%";
    }
}, 30);

let number3 = document.getElementById('number-3');
let countersss = 0;
let interval3 = setInterval(() => {
    if (countersss == 76) {
        clearInterval(interval3);
    } else {
        countersss += 1;
        number3.innerHTML = countersss + "%";
    }
}, 20);
