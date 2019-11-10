export class City {
    constructor(key, name, lat, long, pop) {
        this.key = key;
        this.name = name;
        this.lat = lat;
        this.long = long;
        this.pop = pop;
    }

    show() {
        return `Key: ${this.key}, Name: ${this.name}, Lat: ${this.lat}, Long: ${this.long}, Population: ${this.pop}`
    }

    async movedIn(value) {
        this.pop += Number(value);
        await postData(url + 'update', this);
    }

    async movedOut(value) {
        this.pop -= Number(value);
        await postData(url + 'update', this);
    }

    howBig() {
        if (this.pop > 100000) return "City";
        if (this.pop > 20000) return "Large Town";
        if (this.pop > 1000) return "Town";
        if (this.pop > 100) return "Village";
        if (this.pop > 0) return "Hamlet";
        return "Ghost Town";
    }
}


export class Community {
    constructor(cityList) {
        this.cityList = cityList;
    }

    getCity(key) {
        return this.cityList.filter(city => city.key === key)[0];
    }

    async loadData() {
        let data = await postData(url + 'all');
        this.cityList = data.map(dataCity => new City(dataCity.key, dataCity.name, dataCity.lat, dataCity.long, dataCity.pop));
        console.log("Cities loaded:")
        console.log(this.cityList);
    }

    async createCity(key, name, lat, long, pop) {
        const city = new City(key, name, Number(lat), Number(long), Number(pop));
        this.cityList.push(city);
        await postData(url + 'add', city);
    }

    async deleteCity(key) {
        this.cityList = this.cityList.filter(city => city.key !== key);
        await postData(url + 'delete', { key });
    }

    whichSphere(city) {
        if (city.lat > 0) return "Northern Hemisphere";
        return "Southern Hemisphere";
    }

    getPopulation() {
        return this.cityList.reduce(((accumulator, city) => accumulator + city.pop), 0);
    }

    getMostNorthern() {
        return this.cityList.sort((a, b) => b.lat - a.lat)[0];
    }

    getMostSouthern() {
        return this.cityList.sort((a, b) => a.lat - b.lat)[0];
    }

    getHighestKey() {
        if (this.cityList.length > 0) return this.cityList.sort((a, b) => b.key - a.key)[0].key;
        return 0;
    }
}


// const fetch = require('node-fetch');
const url = 'http://localhost:5000/';

export async function postData(url, data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    return json;
}