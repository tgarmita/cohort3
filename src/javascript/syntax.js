// --------------- Copy this section into your code syntax.js as comments --------

// define attributes / variables
    // number
    const num = () => typeof(10.5);

    // string
    const str = () => typeof("hi");

    // boolean
    const bool = () => typeof(false);

    // array
    const arry = () => Array.isArray([1, "two", true]);
    const arryEle = () => [1, "two", true];

    // dictionary / objects
    const obj = () => typeof({title: "California Dreamin'", artist: "The Mamas & the Papas"});
    const objProp = () => ({title: "California Dreamin'", artist: "The Mamas & the Papas"});
    
    // undefined
    const undef = (x) => x;

// sample if / else
const evenOdd = (x) => {
    if (x % 2 === 0){
        return "even"
    } else {
        return "odd";
    }
};

// functions
    // parameters
    const funcPs = (p1,p2,p3) => p3 + (Number(p1) + Number(p2));
    // returns
    const funcReturn = (x) => {
        return x; //exits function after first return
        return x + 1;
    };


// arrays
    // add to the front
    const arrAddFront = (arr, ele) => {
        arr.unshift(ele);
        return arr;
    };
    // add to the end
    const arrAddEnd = (arr, ele) => {
        arr.push(ele);
        return arr;
    };
    // update values
    const arrUpdate = (arr, newVal, index) => {
        arr[index] = newVal;
        return arr;
    };

// loops 
    // for
    // for/in
    // while
    // do while
    // forEach (with array and function)
// Objects / Dictionaries
    // declare object
    // lookup key to retrieve value

// --------------- Copy ends here --------

export {num, str, bool, arry, arryEle, obj, objProp, undef, evenOdd, funcPs, funcReturn, arrAddFront, arrAddEnd, arrUpdate}