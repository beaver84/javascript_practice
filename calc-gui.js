var clickNumbers = function(event){
    console.log("click numbers");
    console.log(event.target.innerHTML);
}

var clickOthers = function(event){
    console.log("click others");
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