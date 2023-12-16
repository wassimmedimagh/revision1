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
    function laughwithfor(number){
  var result=""
  for (var i=0;i<number; i++) {
    result+="ha"
}
return result
}

function laughwithwile(number){
  var result=""
    var i=0
while(i<number){
    result+="ha"

    i++}
    return result}
    function laughrecusively(num) {
  if (num === 0) {
    return "";
  }
  
  else {
    return "ha" + laugh(num - 1);
  }
}
function sumofn(num){
        if (num === 0){
            return 0
        }
        return num + sumofn(num-1)
    }

function sumofn(num){
      var sum=0
    var i=1
    while(i<=num){
        sum+=i
    i++}
    return sum
    
    }
    function sumofn(num){
      var sum=0
    
    for(var i=1;i<=num;i++){
        sum+=i
    }
    return sum
    
    }

function factorialRecursively(number) {
    if (number<=1){
        return 1}
return number*factorialRecursively(number-1)}
function rangefor(min,max){
    var arr=[]
    for (var i=min;i<max;i++){
        arr.push(i)}
    return arr
}function rangewhile(min,max){
    var arr=[]
    var i=min
    while(i<max){
        arr.push(i)
    i++
    }
    return arr
}

