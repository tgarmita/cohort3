import {City, Community} from './cities.js'


describe('City Testing', () => {
    const smallCity = new City(4, "Lethbridge", -110.1, 49.5, 101500);


    test('City properties', () => {
        expect(smallCity.name).toEqual("Lethbridge");
        expect(smallCity.pop).toEqual(101500);
    });

    test('show() returns display string of properties', () => {
        expect(smallCity.show()).toEqual("Key: 4, Name: Lethbridge, Lat: -110.1, Long: 49.5, Population: 101500");
    });

    test('movedIn(value) adds value to pop', () => {
        smallCity.movedIn(1500);
        expect(smallCity.pop).toEqual(103000);
    });

    test('movedOut(value) subtracts value from pop', () => {
        smallCity.movedOut(2999);
        expect(smallCity.pop).toEqual(100001);
    });

    test('howBig() returns appropriate classification string', () => {
        expect(smallCity.howBig()).toEqual("City");
    });

});

describe('Community Controller Testing', () => {
    const province = new Community([{"key":1, "city":"Calgary", "lat":51.05, "long":-114.05},{"key":2, "city":"Edmonton", "lat":53.55, "long":-113.49},{"key":3, "city":"Red Deer", "lat":52.28, "long":-113.81}]);

    test('getCity(key) returnscity by key', () => {
        expect(province.getCity(3)).toEqual({"key":3, "city":"Red Deer", "lat":52.28, "long":-113.81});
    });
   
    test('whichSphere(city) returns appropriate hemisphere', () => {
        expect(province.whichSphere(province.getCity(1))).toEqual("Northern Hemisphere");
    });

    // test('getPopulation() returns total population of community', () => {
    //     expect(province.getPopulation()).toEqual(600);
    // });

    // test('mostValuableAccount() returns account with highest balance', () => {
    //     expect(province.getMostNorthern()).toEqual("");
    // });

    // test('leastValuableAccount() returns account with highest balance', () => {
    //     expect(province.getMostSouthern()).toEqual("");
    // });
});