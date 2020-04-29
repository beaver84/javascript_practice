var input= {'array': []};

input.getInput = function() {
    return this.array.join("");    
}

var output = {};
output.text = document.getElementById('output');

var clickNumbers = function(event){    
    var str = event.target.innerHTML;    
    console.log(str);

    switch (str) {
        case 'BS':
        input.array.pop();
        break;
        case '+':
        input.array.push(' ' + str + ' ');
        break;
        case '-':
        input.array.push(' ' + str + ' ');
        break;
        case '*':
        input.array.push(' ' + str + ' ');
        break;
        case '/':
        input.array.push(' ' + str + ' ');
        break;
        default:
        input.array.push(str);
    }    
    // console.log(input.getInput());

    if (input.array.length === 0){
        output.text.innerHTML = input.getInput();
    } else {
        output.text.innerHTML = input.getInput();
    }
}

var showResult = function(event){
    console.log("click showResult");
    console.log(event.target.innerHTML);
}
// var = input = {};

// input.init = function(str) {
//     this.list = str.split(" ");
// };

// input.empty = function(){
//     return this.list.length == 0;
// };

// input.getValue = function() {
//     var str = this.list.shift();
//     var n = Number(str);
//     return n;
// };

// input.getOperator = function(){
//     var op = this.list.shift();
//     if (op === "+" || op === "-" || op === "*" || op === "/"){
//         return op;
//     } else {
//         return "$";
//     }
// };