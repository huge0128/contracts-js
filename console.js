'use strict'
function string2int(s){
    var arr = [];
    for(var c of s){
        arr.push(c);
        console.log(c);
    }
    return arr.map(arr.reduce(function(x, y){
        return x* 10 + y;
    }));
    
}
    if (string2int('0')===0 && string2int('12345') === 12345) {
        console.log('pass');
    } 