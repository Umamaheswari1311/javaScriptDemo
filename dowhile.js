let s = 0;
let n = 0;

do {
    s += n;
     console.log(s) 
    n++
    if(n==10)
     break;
} while(n >= 0)

console.log(`The sum is ${s}.`);