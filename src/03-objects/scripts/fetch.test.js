import functions from './fetch.js' 

const data = [{"name":"Selmeczi","surname":"Hetény","gender":"male","region":"Hungary"},{"name":"Ζώσιμος","surname":"Κουρμούλης","gender":"male","region":"Greece"},{"name":"Jaap van","surname":"Veen","gender":"male","region":"Netherlands"},{"name":"Cristina","surname":"Burtea","gender":"female","region":"Romania"},{"name":"Ιερεμίας","surname":"Κρεστενίτης","gender":"male","region":"Greece"},{"name":"Yaser","surname":"Kızılkaya","gender":"male","region":"Turkey"},{"name":"Bethany","surname":"Carter","gender":"female","region":"England"},{"name":"Stana","surname":"Olariu","gender":"female","region":"Romania"},{"name":"Martha","surname":"Russell","gender":"female","region":"United States"},{"name":"Κέφαλος","surname":"Μαρκόπουλος","gender":"male","region":"Greece"}];

test('getFirstName(data) returns the first persons name', () => {
    expect(functions.getFirstName(data)).toEqual("Selmeczi");
});

test('getAllFirstNames(data) returns the first persons name', () => {
    expect(functions.getAllFirstNames(data)).toEqual(["Selmeczi", "Ζώσιμος", "Jaap van", "Cristina", "Ιερεμίας", "Yaser", "Bethany", "Stana", "Martha", "Κέφαλος"]);
});

// test('workWithData()', async () =>  {
//     expect(await functions.workWithData()).toEqual(["Selmeczi", "Ζώσιμος", "Jaap van", "Cristina", "Ιερεμίας", "Yaser", "Bethany", "Stana", "Martha", "Κέφαλος"]);
// });
