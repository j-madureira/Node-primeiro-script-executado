let args = process.argv.slice(2);

let a = Number(args[0]);
let b = Number(args[1]);
let c = calc(a,b);

function calc (x,y){
    return x + y;
}


console.log(c);