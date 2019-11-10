import viewFunctions from './viewFunctions.js'
import { City, Community } from './cities.js'


describe('Map Testing', () => {

    const fs = require('fs');
    const path = require('path');
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

    jest.dontMock('fs');

    beforeEach(() => {
        //import entire html file before each test function
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });


    test('refreshMap() updates map points during relevant events', () => {
        const lethbridge = new City(4, "Lethbridge", 49.7, -112.8, 101500);
        const airdrie = new City(5, "Airdrie", 51.2, -114.0, 70000);
        const sundre = new City(6, "Sundre", 51.8, -114.5, 3000);

        const province = new Community([lethbridge, airdrie, sundre]);

        expect(idSVG.childElementCount).toEqual(0);

        province.createCity(10, "Fort Mac", 57.0, -112.0, 80000);
        viewFunctions.refreshMap(province.cityList);

        expect(idSVG.childElementCount).toEqual(8); //Text and circle svg for each city
        expect(idSVG.lastElementChild.textContent).toEqual("Fort Mac");
    });

    test('selectPoint() adds city-selected to classList', () => {
        const lethbridge = new City(4, "Lethbridge", 49.7, -112.8, 101500);
        const airdrie = new City(5, "Airdrie", 51.2, -114.0, 70000);
        const sundre = new City(6, "Sundre", 51.8, -114.5, 3000);

        const province = new Community([lethbridge, airdrie, sundre]);
        viewFunctions.refreshMap(province.cityList);

        expect(idSVG.childNodes[0].classList.length).toEqual(1);
        expect(idSVG.childNodes[0].classList[0]).toEqual("city-point");

        viewFunctions.selectPoint(idSVG.childNodes[0]);

        expect(idSVG.childNodes[0].classList.length).toEqual(2);
        expect(idSVG.childNodes[0].classList[1]).toEqual("city-selected");
    });
});