function zeros(str) {
    var factorialsArray = str.split('*');
    var singleFactorialArray = [];
    var doubleFactorialArray = [];
    var amountOfTwos = 0;
    var amountOfFives = 0;

    for (var i = 0; i < factorialsArray.length; i++) {
        var value = parseInt(factorialsArray[i]);
        var notFoundValue = -1;

        if (factorialsArray[i].indexOf('!!') !== notFoundValue) {
            doubleFactorialArray.push(value);
        } else {
            singleFactorialArray.push(value);
        }
    }

    for (var i = 0; i < singleFactorialArray.length; i++) {
        for (var number = 1; number <= singleFactorialArray[i]; number++) {
            amountOfTwos += getAmountOfTwos(number);
            amountOfFives += getAmountOfFives(number);
    	}
    }

    for (var i = 0; i < doubleFactorialArray.length; i++) {
        var factorialOf = doubleFactorialArray[i];
        var isEven = factorialOf % 2 === 0;
        var startIndex = isEven ? 2 : 1;

        for (var number = startIndex; number <= factorialOf; number += 2) {
            amountOfTwos += getAmountOfTwos(number);
            amountOfFives += getAmountOfFives(number);
        }
    }

    return Math.min(amountOfTwos, amountOfFives);
}

function getAmountOfTwos(currentNumber) {
    var amountOfTwos = 0;

    while (currentNumber % 2 === 0) {
        currentNumber = currentNumber / 2;
        amountOfTwos++;
    }

    return amountOfTwos;
}

function getAmountOfFives(currentNumber) {
    var amountOfFives = 0;

    while (currentNumber % 5  === 0) {
        currentNumber = currentNumber / 5;
        amountOfFives++;
    }

    return amountOfFives;
}

console.log(zeros('5!'));
