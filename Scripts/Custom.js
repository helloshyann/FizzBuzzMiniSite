//FizzBuzz Code
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
//FizzBuzz Button Function
function fizzle() {
    
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row-items');

    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = headTemplate.innerHTML;
    
    let val1 = document.getElementById('fizzNum').value;
    let val2 = document.getElementById('buzzNum').value;

    output = fizzBuzz(val1, val2);

    if (val1 == "" || val2 == "") {
        document.getElementById('results').innerHTML = 'You must enter two numbers to play Fizz Buzz';        
    }
    else {
        for (i = 0; i < output.length; i += 5) {
            resultsHTML += templateHTML.replace('{{val1}}', output[i])
                .replace('{{val2}}', output[i + 1])
                .replace('{{val3}}', output[i + 2])
                .replace('{{val4}}', output[i + 3])
                .replace('{{val5}}', output[i + 4]);
        }
        document.getElementById('results').innerHTML = resultsHTML;       
    }
}
