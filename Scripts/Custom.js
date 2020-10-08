


////FizzBuzz Code
function fizzBuzz() {
    let firstNum = document.getElementById('fizzNum').value;
    let secondNum = document.getElementById('buzzNum').value;
    let returnValue = [];
    for (let i = 1; i <= 100; i++) {
        if (i % firstNum == 0 && i % secondNum == 0) {
            returnValue.push("<span class='fizzbuzz ffont'> Fizz</span><span class='fizzbuzz bfont'> Buzz</span>");
        }
        else if (i % firstNum == 0) {
            returnValue.push("<span class='fbstyle'> fizz</span>");
        }
        else if (i % secondNum == 0) {
            returnValue.push("<span class='fbstyle'> buzz</span>");
        }
        else {
            returnValue.push(" " + i);
        }
    }
    return returnValue;
}




//Call FizzBuzz
function fizzle() {
    let result = "";
    let value1 = document.getElementById('fizzNum').value;
    let value2 = document.getElementById('buzzNum').value;
    result = fizzBuzz(value1, value2);
    document.getElementById('result').innerHTML = `${result}`;
}