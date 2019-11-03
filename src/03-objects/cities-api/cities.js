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
    movedIn(value) {
        this.pop += value;
    }

    movedOut(value) {
        this.pop -= value;
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
    constructor(cityList = []) {
        this.cityList = cityList;
    }

    getCity(key) {
        return this.cityList.filter(city => city.key === key)[0];
    }

    whichSphere(city) {
        if (city.lat > 0) return "Northern Hemisphere";
        return "Southern Hemisphere";
    }

    // getPopulation() {
    //     return this.cityList.reduce(((accumulator, city) => accumulator + Number(city.pop)), 0);
    // }

    // getMostNorthern() {
    //     return this.cityList.sort((a, b) => b.lat - a.lat)[0];
    // }

    // getMostSouthern() {
    //     return this.cityList.sort((a, b) => a.lat - b.lat)[0];
    // }


}