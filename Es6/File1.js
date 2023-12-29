export const add = (a, b, c, d) => { return a + b + c + d }

//Spread function
export const spreadAdd = (...a) => {
    let c = 0;
//  ES6  default for loop
//  for(val of a){
//      c=c+val;
//  }

     //normal array method
    a.forEach(val => { c = c + val })
    return c;
}
export function testing(a,b){
    console.log("a :"+a);
    console.log("b :"+b);
    let c=a+b;    // logical implementation
    return c;
}