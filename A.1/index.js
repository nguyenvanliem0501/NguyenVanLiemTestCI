console.log("Tìm số đối diện với số mà bạn nhập vào trên vòng tròn:");

function findOppositeNumber( n,  inputNumber){
        if(n % 2 == 0 && n >= 4 && n < 20 && inputNumber < n && inputNumber >= 0){
            let haflvalue = n/2;
            let total = inputNumber + haflvalue;
            if(total > n){
                total = total - n;
            }
            return total;
        }      
    
}
console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));

// while(true){
//     var n = parseInt(prompt("Enter a number: "));
//     if(n%2 == 0 && n<4 && n>20){
//     var inputNumber = parseInt(prompt("Enter a inputNumber"));
//     }
// }
// var i = inputNumber + (n/2);
//     alert(`Số đối diện với ${inputNumber} la ${i}`);