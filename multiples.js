let multiples = function(n){
    let i = 0; 
    while (i <= 20){
        
        if (n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
            console.log (n * i);
        }
        i++;
    }

}
multiples(3);