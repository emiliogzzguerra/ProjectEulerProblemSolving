var total = 0;

function isPrime(num){
	//2 is the only even number that is a prime
    if ( num > 2 && num%2 == 0 ) {
        return false;
    }
    
    var top = Math.sqrt(num) + 1;
    for(var i = 3; i < top; i+=2){
        if(num % i == 0){
            return false;
        }
    }
    total += num;
    return true; 
}

for (var i = 2; i <= 2000000; i++) {
	isPrime(i);
};

console.log(total);