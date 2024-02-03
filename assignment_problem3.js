var a = parseint(prompt());
console.log(a);
function isodd(num){
    return num%2!=0;
}

function print(a){
    for(let i=0;i<=a;i++){
        if(isodd(i)){
            console.log(i)
        }
    }
}