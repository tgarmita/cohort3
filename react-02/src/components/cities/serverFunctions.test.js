import { Community } from './cities.js'
import serverFunctions from './serverFunctions.js'

describe('Class methods update data on server using API CRUD functionality', () => {
    global.fetch = require('node-fetch');
    const url = 'http://localhost:5000/';

    const serverTestData = [
        { "key": 1, "name": "Calgary", "lat": 51.05, "long": -114.05, "pop": 1200000 },
        { "key": 2, "name": "Edmonton", "lat": 53.55, "long": -113.49, "pop": 1000000 },
        { "key": 3, "name": "Red Deer", "lat": 52.28, "long": -113.81, "pop": 100000 },
        { "key": 4, "name": "Lethbridge", "lat": 49.7, "long": -112.8, "pop": 93000 },
        { "key": 5, "name": "Peace River", "lat": 56.23, "long": -117.23, "pop": 7000 }
    ];


    test('loadData() loads server data into city list', async () => {
        const province = new Community([]);
        await serverFunctions.postData(url + 'clear');

        await serverFunctions.postData(url + 'add', serverTestData[0]);
        await serverFunctions.postData(url + 'add', serverTestData[1]);
        await serverFunctions.postData(url + 'add', serverTestData[2]);
        await serverFunctions.postData(url + 'add', serverTestData[3]);
        await serverFunctions.postData(url + 'add', serverTestData[4]);

        let data = await serverFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(5);
        expect(province.cityList.length).toEqual(0);
        expect(province.getHighestKey()).toEqual(0);

        await serverFunctions.loadData(province);

        expect(province.cityList.length).toEqual(5);
        expect(province.cityList[2]).toEqual(data[2]);
        expect(province.getHighestKey()).toEqual(5);
    });


    test('addData(city) adds city to server', async () => {
        const province = new Community([]);
        await serverFunctions.postData(url + 'clear');

        let newCity = province.createCity(7, "Caroline", 52.09, -114.74, 500);

        await serverFunctions.addData(newCity);

        let data = await serverFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(1);
        expect(data[0].name).toBe("Caroline");

        expect(province.cityList[0]).toEqual(data[0]);
    });


    test('updateData(city) updates city pop in server', async () => {
        const province = new Community([]);
        await serverFunctions.postData(url + 'clear');
        let newCity = province.createCity(7, "Caroline", 52.09, -114.74, 500);
        await serverFunctions.addData(newCity);

        let data = await serverFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data[0].pop).toBe(500);


        province.getCity(7).movedIn(600);
        serverFunctions.updateData(province.getCity(7));

        data = await serverFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data[0].pop).toBe(1100);


        province.getCity(7).movedOut(100);
        serverFunctions.updateData(province.getCity(7));

        data = await serverFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data[0].pop).toBe(1000);


        expect(province.cityList[0]).toEqual(data[0]);
    });

    test('deleteData(key) deletes city in server by key', async () => {
        await serverFunctions.postData(url + 'clear');
        await serverFunctions.postData(url + 'add', serverTestData[0]);
        await serverFunctions.postData(url + 'add', serverTestData[1]);
        await serverFunctions.postData(url + 'add', serverTestData[2]);
        await serverFunctions.postData(url + 'add', serverTestData[3]);
        await serverFunctions.postData(url + 'add', serverTestData[4]);

        let data = await serverFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(5);

        await serverFunctions.deleteData(2);

        data = await serverFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(4);
        expect(data[1].name).toBe("Red Deer");
    });
});
