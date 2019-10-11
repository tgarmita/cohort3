// --------------- Copy this section into your code syntax.js as comments --------

// define attributes / variables
// number
const num = () => typeof (10.5);

// string
const str = () => typeof ("hi");

// boolean
const bool = () => typeof (false);

// array
const arry = () => Array.isArray([1, "two", true]);
const arryEle = () => [1, "two", true];

// dictionary / objects
const obj = () => typeof ({ title: "California Dreamin'", artist: "The Mamas & the Papas" });
const objProp = () => ({ title: "California Dreamin'", artist: "The Mamas & the Papas" });

// undefined
const undef = (x) => x;

// sample if / else
const evenOdd = (x) => {
    if (x % 2 === 0) {
        return "even"
    } else {
        return "odd";
    }
};

// functions
// parameters
const funcPs = (p1, p2, p3) => p3 + (Number(p1) + Number(p2));
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
const forLoop = (arr) => {
    let i;
    for (i = 1; i < arr.length; i++) {
    }
    return i;
};

// for/in
const forIn = (obj) => {
    let x;
    let asl = "";
    for (x in obj) {
        asl += obj[x];
        if (x != "location") {
            asl += "/";
        }
    }
    return asl;
};
// while

const whileLoop = (arr) => {
    let i = 0;
    while (i < arr.length) {
        i++;
    }
    return i;
};

// do while
const doWhile = (arr) => {
    let i = 0;
    do {
        i++;
    }
    while (i < arr.length);
    return i;
};

// forEach (with array and function)
const forE = (arr) => {
    const addPunc = (ele, index, arr) => {
        arr[index] = ele + "!";
    };
    arr.forEach(addPunc);
    return arr;
};


// Objects / Dictionaries
// declare object
const decObj = () => {
    let obj = { name: "Orange", type: "Fruit" };
    return typeof (obj);
}

// lookup key to retrieve value
const objLookup = () => {
    let obj = { name: "Orange", type: "Fruit" };
    return obj.type;
}

// --------------- Copy ends here --------

export {
    num, str, bool, arry, arryEle, obj, objProp, undef, evenOdd, funcPs,
    funcReturn, arrAddFront, arrAddEnd, arrUpdate, forLoop, forIn, whileLoop,
    doWhile, forE, decObj, objLookup
}