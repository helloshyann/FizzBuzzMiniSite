////FizzBuzz Code
function fizzBuzz() {
    let firstNum = document.getElementById('fizzNum').value;
    let secondNum = document.getElementById('buzzNum').value;
    let finalResult = [];
    for (let i = 1; i <= 100; i++) {
        if (i % firstNum == 0 && i % secondNum == 0) {
            finalResult.push("<span class='fizzfizz'> Fizz</span><span class='buzzbuzz'> Buzz</span>");
            confetti.start(1000);
        }
        else if (i % firstNum == 0) {
            finalResult.push("<span class='fbstyle'> fizz</span>");
        }
        else if (i % secondNum == 0) {
            finalResult.push("<span class='fbstyle'> buzz</span>");
        }
        else {
            finalResult.push(" " + i);
        }
    }
    return finalResult;
}




//Call FizzBuzz
function fizzle() {
    let result = "";
    let value1 = document.getElementById('fizzNum').value;
    let value2 = document.getElementById('buzzNum').value;
    result = fizzBuzz(value1, value2);
    document.getElementById('result').innerHTML = `${result}`;
}