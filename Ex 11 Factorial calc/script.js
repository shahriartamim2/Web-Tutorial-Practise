let a = prompt("Enter a number: ");
let fact=1;
function Factorial(i){
    while(i!=0){
        fact=fact*i;
        i--;
    }
    return fact;
}
console.log(Factorial(a));