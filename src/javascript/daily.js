//Oct21
export const loopStaff = (staffArray) => {
    const buildEmail = (currentValue) => {
        return currentValue.fname.toLowerCase() + "." + currentValue.lname.toLowerCase() + "@evolveu.ca";
    };
    return staffArray.map(buildEmail);
}


//Oct16-17
//slice
export const arrSlice = (arr, start, end) => {
    return arr.slice(start, end);
};
//splice
export const arrSplice = (arr, startIndex, howMany, item1) => {
    arr.splice(startIndex, howMany, item1);
    return arr;
};

//forEach
export const arrForEach = (arr) => {
    const timesTwo = (item, index, arr) => {
        arr[index] = item * 2;
    };
    arr.forEach(timesTwo);
    return arr;
};

//map
export const arrMap = (arr) => {
    const timesTwo = (num) => {
        return num * 2;
    };
    let newArr = arr.map(timesTwo);
    return newArr;
}

//reduce
export const arrReduce = (arr) => {
    const calcTotal = (accumulator, element) => {
        return accumulator + element;
    };
    return arr.reduce(calcTotal);
}

//filter
export const arrFilter = (arr) => {
    const checkEven = (element) => {
        return element % 2 === 0;
    };
    let newArr = arr.filter(checkEven)
    return newArr;
};

//sort
export const arrSortNum = (arr) => {
    arr.sort(function (a, b) { return a - b });
    return arr;
};
export const arrSortAlpha = (arr) => {
    arr.sort();
    return arr;
};






//Oct15
// Basics
// for
export const forLoop = (a, b, c) => {
    let args = [a, b, c];
    let arr = [];
    let i;
    for (i = 0; i < args.length; i++) {
        arr[i] = args[i];
    }
    return arr;
};

// while
export const whileLoop = (a, b, c) => {
    let args = [a, b, c];
    let arr = [];
    let i = 0;
    while (i < args.length) {
        arr[i] = args[i];
        i++;
    }
    return arr;
};

// do while
export const doWhileLoop = (a, b, c) => {
    let args = [a, b, c];
    let arr = [];
    let i = 0;
    do {
        arr[i] = args[i];
        i++;
    } while (i < args.length);
    return arr;
};


// Next Level
// for in
export const forIn = (a, b, c) => {
    let args = [a, b, c];
    let arr = [];
    let i = 0;
    let x;
    for (x in args) {
        arr[i] = args[x];
        i++;
    };
    return arr;
};

// for of
export const forOf = (a, b, c) => {
    let args = [a, b, c];
    let arr = [];
    let i = 0;
    let x;
    for (x of args) {
        arr[i] = x;
        i++;
    };
    return arr;
};



//Oct11
export const makeEmailObj = (name) => {
    // let firstN = name[0].toLowerCase();
    // let lastN = name[1].toLowerCase();
    return name.fname.toLowerCase() + "." + name.lname.toLowerCase() + "@evolveu.ca";
};



//Oct9
export const makeEmailArr = (name) => {
    let firstN = name[0].toLowerCase();
    let lastN = name[1].toLowerCase();
    return firstN + "." + lastN + "@evolveu.ca";
};



/*	Oct7
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
export const assertEquals = (p1, p2) => {
    if (p1 === p2) {
        return true;
    }
    console.log(`*** the two values are not the same:
    p1--> ${p1}
    p2--> ${p2}`)
    return false;
};

// and before this comment ---

assertEquals("a", "b");
assertEquals("a", "a");
assertEquals(1, 2);
assertEquals(2, 2);
assertEquals("2", 2);
assertEquals("This value", "This value");
