

//  taking access of buttons

let addBtn = document.getElementById('add');
let subBtn = document.getElementById('sub');
let mulBtn = document.getElementById('mul');
let divBtn = document.getElementById('div');

//  assigning operators 

let operator;

addBtn.onclick = () => operator = '+';
subBtn.onclick = () => operator = '-';
mulBtn.onclick = () => operator = '*';
divBtn.onclick = () => operator = '/';



let sub = document.getElementById('submit');

sub.addEventListener('click', () => {

    // read the input
    let inp1 = document.getElementById('first');
    let num1 = Number(inp1.value);

    let inp2 = document.getElementById('second');
    let num2 = Number(inp2.value);

    // CALCULATE 

    let res_value;

    if (operator == '+') {
        res_value = num1 + num2;
    } else if (operator == '-') {
        res_value = num1 - num2;
    } else if (operator == '*') {
        res_value = num1 * num2;
    } else if (operator == '/') {
        res_value = num1 / num2;
    }


    // print output

    let result = document.getElementById("result");
    result.textContent = "Result : " + res_value;


})

