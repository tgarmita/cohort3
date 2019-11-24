//Nov22
let myArray = [
    { num: 5, str: "apples", origin: "BC" },
    { num: 7, str: "oranges", origin: "Florida" },
    { num: 2, str: "lemons", origin: "Mexico" },
    { num: 8, str: "bananas", origin: "Ecuador" },
    { num: 6, str: "avocados", origin: "Mexico" },
    { num: 4, str: "pineapple", origin: "Brazil" },
    { num: 3, str: "blueberries", origin: "Chile" },
    { num: 9, str: "pears", origin: "Oregon" },
    { num: 1, str: "cantaloupe", origin: "California" }
];
//
// Do the statements below 3 times, one for each type of function
//
// myArray.sort(.....enter code here

export const sortFunctions = () => {
    myArray.sort(function (a, b) {
        return a.num - b.num
    });
    console.log("myArray = ", myArray);

    myArray.sort(function fruitSort(a, b) {
        if (a.str < b.str) return -1;
        if (a.str > b.str) return 1;
        return 0
    });
    console.log("myArray = ", myArray);

    myArray.sort((a, b) => {
        if (a.origin < b.origin) return 1;
        if (a.origin > b.origin) return -1;
        return 0
    });
    console.log("myArray = ", myArray);

    return myArray
}


//Nov21
export const summarizePeople = (peopleArray) => {
    const summary = {};
    const peopleABBC = filterProvinces(peopleArray);

    summary.totalPeople = peopleABBC.length;
    summary.totalAge = peopleABBC.reduce(((accumulator, person) => accumulator + person.age), 0);
    summary.averageAge = summary.totalAge / summary.totalPeople;
    return summary;
}


//Nov8 - Callback Exercise (Part 1)
export const filterProvinces = (peopleArray, callBackF = array => array) => {
    const peopleABBC = [];
    for (const person of peopleArray) {
        if (person.province === "AB" || person.province === "BC") {
            peopleABBC.push(callBackF(person));
        }
    }
    return peopleABBC;
};

export const makeNames = (person) => {
    return person.fname + " " + person.lname;
};


//Nov6 - More Array Exercises (Really)
export const filterBalances = (staffArray) => {
    const richStaff = staffArray.filter(staffMem => staffMem.balance >= 1000);
    return richStaff.map(staffMembers => staffMembers.balance);
};

//Oct29 - More Array Exercises
export const totalBalances = (staffArray) => {
    return staffArray.reduce(((accumulator, staffMem) => accumulator + staffMem.balance), 0);
};

export const averageBalances = (staffArray) => {
    const total = staffArray.reduce(((accumulator, staffMem) => accumulator + staffMem.balance), 0);
    return total / staffArray.length;
};

//Oct25
export const loopStaffForEach = (staffArray) => {
    const emailArr = [];
    staffArray.forEach((staffMem, index) => {
        //Using index of staffArray a bit of a shortcut, only works because we can have the same index order
        emailArr[index] = makeEmailObj(staffMem);
    })
    return emailArr;
};

//So slick
export const loopStaffMap = (staffArray) => {
    return staffArray.map(staffMem => makeEmailObj(staffMem));
};

//Oct24
export const loopStaffIn = (staffArray) => {
    const emailArr = [];
    let emailIndex = 0;
    for (const staffIndex in staffArray) {
        emailArr[emailIndex] = makeEmailObj(staffArray[staffIndex]);
        emailIndex++;
    }
    return emailArr;
};

//this is more appropriate since looping through array
export const loopStaffOf = (staffArray) => {
    const emailArr = [];
    let emailIndex = 0;
    for (const staffMem of staffArray) {
        emailArr[emailIndex] = makeEmailObj(staffMem);
        emailIndex++;
    }
    return emailArr;
};

//Oct22
export const loopStaff = (staffArray) => {
    const buildEmail = (currentValue) => {
        return makeEmailObj(currentValue);
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
    // console.log(`*** the two values are not the same:
    // p1--> ${p1}
    // p2--> ${p2}`)
    return false;
};

// and before this comment ---

assertEquals("a", "b");
assertEquals("a", "a");
assertEquals(1, 2);
assertEquals(2, 2);
assertEquals("2", 2);
assertEquals("This value", "This value");
