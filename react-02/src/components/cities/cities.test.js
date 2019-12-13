import { City, Community, postData } from './cities.js'

const lethbridge = new City(4, "Lethbridge", 49.7, -112.8, 101500);
const airdrie = new City(5, "Airdrie", 51.2, -114.0, 70000);
const sundre = new City(6, "Sundre", 51.8, -114.5, 3000);
const caroline = new City(7, "Caroline", 52.09, -114.74, 500);
const bearberry = new City(8, "Bearberry", 51.5, -115.0, 75);
const spooky = new City(9, "Spooky", -55, -110.5, 0);


describe('City Testing', () => {

    test('City properties', () => {
        expect(lethbridge.name).toEqual("Lethbridge");
        expect(lethbridge.pop).toEqual(101500);
    });

    test('show() returns display string of properties', () => {
        expect(lethbridge.show()).toEqual(`
Key: 4
Lat: 49.7
Long: -112.8
Population: 101500`
            );
    });

    test('movedIn(value) adds value to pop', () => {
        lethbridge.movedIn(1500);
        expect(lethbridge.pop).toEqual(103000);
    });

    test('movedOut(value) subtracts value from pop', () => {
        lethbridge.movedOut(2999);
        expect(lethbridge.pop).toEqual(100001);
    });

    test('howBig() returns appropriate classification string', () => {
        expect(lethbridge.howBig()).toEqual("City");
        expect(airdrie.howBig()).toEqual("Large Town");
        expect(sundre.howBig()).toEqual("Town");
        expect(caroline.howBig()).toEqual("Village");
        expect(bearberry.howBig()).toEqual("Hamlet");
        expect(spooky.howBig()).toEqual("Ghost Town");
    });

    test('whichSphere(city) returns appropriate hemisphere', () => {
        expect(lethbridge.whichSphere()).toEqual("Northern Hemisphere");
        expect(spooky.whichSphere()).toEqual("Southern Hemisphere");
    });
});

describe('Community Controller Testing', () => {
    const province = new Community([lethbridge, airdrie, sundre, spooky]);


    test('getCity(key) returns city by key', () => {
        expect(province.getCity(4)).toEqual({ "key": 4, "name": "Lethbridge", "lat": 49.7, "long": -112.8, "pop": 100001 });
    });

    test('createCity() adds new city to cityList', () => {
        expect(province.createCity(7, "Caroline", 52.09, -114.74, 500).key).toEqual(7);
        expect(province.cityList.length).toEqual(5);
    });

    test('deleteCity(key) removes city of that key', () => {
        province.deleteCity(5);
        expect(province.cityList.length).toEqual(4);
        expect(province.cityList[1].name).toEqual("Sundre");
    });

    test('getPopulation() returns total population of community', () => {
        expect(province.getPopulation()).toEqual(103501);
    });

    test('getMostNorthern() returns most northern city', () => {
        expect(province.getMostNorthern().name).toEqual("Caroline");
    });

    test('getMostSouthern() returns most southern city', () => {
        expect(province.getMostSouthern().name).toEqual("Spooky");
    });

    test('getHighestKey() returns highest key', () => {
        expect(province.getHighestKey()).toEqual(9);
    });
});
