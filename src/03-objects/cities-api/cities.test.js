import { City, Community, postData } from './cities.js'

const lethbridge = new City(4, "Lethbridge", 49.5, -110, 101500);
const airdrie = new City(5, "Airdrie", 51.5, -110.1, 70000);
const sundre = new City(6, "Sundre", 52.5, -110.2, 3000);
const caroline = new City(7, "Caroline", 53, -110.3, 500);
const bearberry = new City(8, "Bearberry", 52.7, -110.4, 75);
const spooky = new City(9, "Spooky", -55, -110.5, 0);

describe('City Testing', () => {

    test('City properties', () => {
        expect(lethbridge.name).toEqual("Lethbridge");
        expect(lethbridge.pop).toEqual(101500);
    });

    test('show() returns display string of properties', () => {
        expect(lethbridge.show()).toEqual("Key: 4, Name: Lethbridge, Lat: 49.5, Long: -110, Population: 101500");
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
});

describe('Community Controller Testing', () => {
    const province = new Community([lethbridge, airdrie, sundre, spooky]);


    test('getCity(key) returns city by key', () => {
        expect(province.getCity(4)).toEqual({ "key": 4, "name": "Lethbridge", "lat": 49.5, "long": -110, "pop": 100001 });
    });

    test('createCity() adds new city to cityList', () => {
        province.createCity(7, "Caroline", 53, -110.3, 500);
        expect(province.cityList.length).toEqual(5);
    });

    test('deleteCity(key) removes city of that key', () => {
        province.deleteCity(5);
        expect(province.cityList.length).toEqual(4);
        expect(province.cityList[1].name).toEqual("Sundre");
    });

    test('whichSphere(city) returns appropriate hemisphere', () => {
        expect(province.whichSphere(province.getCity(6))).toEqual("Northern Hemisphere");
        expect(province.whichSphere(province.getCity(9))).toEqual("Southern Hemisphere");
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
});

describe('Class methods update data on server using API CRUD functionality', () => {

    const url = 'http://localhost:5000/';

    const serverTestData = [
        { "key": 1, "name": "Calgary", "lat": 51.05, "long": -114.05, "pop": 1200000 },
        { "key": 2, "name": "Edmonton", "lat": 53.55, "long": -113.49, "pop": 1000000 },
        { "key": 3, "name": "Red Deer", "lat": 52.28, "long": -113.81, "pop": 100000 },
    ];

    const province = new Community([]);

    test('loadData() loads server data into city list', async () => {
        let data = await postData(url + 'clear'); //Does not reset on declaration..?
        data = await postData(url + 'clear'); //Check that the server is running and clear any data

        data = await postData(url + 'add', serverTestData[0]);
        data = await postData(url + 'add', serverTestData[1]);
        data = await postData(url + 'add', serverTestData[2]);

        data = await postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(3);
        expect(province.cityList.length).toEqual(0);

        await province.loadData(); //Load test data into cityList

        expect(province.cityList.length).toEqual(3);
        expect(province.cityList[2]).toEqual(data[2]);
    });

    test('createCity() "adds" city to server', async () => {
        let data = await postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(3);

        await province.createCity(7, "Caroline", 53, -110.3, 500);

        data = await postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(4);
        expect(data[3].name).toBe("Caroline");

        expect(province.cityList[3]).toEqual(data[3]);
    });

    test('movedIn/Out() "updates" city pop in server', async () => {
        let data = await postData(url + 'all');

        await province.getCity(7).movedIn(600);
        await province.getCity(7).movedOut(100);

        data = await postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data[3].pop).toBe(1000);

        expect(province.cityList[3]).toEqual(data[3]);
    });

    test('deleteCity() - deletes city in server by key', async () => {
        let data = await postData(url + 'all');
        expect(data.length).toBe(4);

        await province.deleteCity(2);

        data = await postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(3);
        expect(data[1].name).toBe("Red Deer");

        expect(province.cityList[1]).toEqual(data[1]);
    });
});
