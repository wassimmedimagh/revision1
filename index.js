index.js
function iterateandlog(n){
    if (n%2===0){
        return "even"}
    return " odd"
}
function iterateAndLogWithFor(n) {
    for (var i = 0; i <= n; i++){
        if (i % 2 ===0) {
            console.log(i + ' is even')
        }else{
            console.log(i + ' is odd')
        }
    }
}
function iterateAndLogWithWhile(n) {          
    var i = 0;
    while (i <= n) {
        if (i % 2 ===0) {
            console.log(i + ' is even')
        }else{
            console.log(i + ' is odd')
        }
        i++;
    }
}
function itteraterecursively(number){
    if(number===0){
    return }
        if (number%2===0){
            console.log( number , "is Evene")}
            else{
            console.log(number,"is odd")
        }
    return itteraterecursively(number-1)
}
unction reverseiterateAndLogWithWhile(n) {          
    var i = 0;
    while (i >= 0) {
        if (i % 2 ===0) {
            console.log(i + ' is even')
        }else{
            console.log(i + ' is odd')
        }
        i++;
    }
}
function iterateAndLogWithFor(n) {
    for (var i = 0; i=>0; i++){
        if (i % 2 ===0) {
            console.log(i + ' is even')
        }else{
            console.log(i + ' is odd')
        }
    }
}
function weirdDivisionWithFor(n){
    for (var i=1;i<=n;i++)
        if(n%3===0){
            return "julia"}
    if(n%5===0){
        return "james"}
    if((n%3===0)&&(n%5===0))
        return"juliajames"
    if(n!==0){
        return n
    }
        
    }
        