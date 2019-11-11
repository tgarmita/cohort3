import { Community } from './cities.js'
import viewFunctions from './viewFunctions.js'
import serverFunctions from './serverFunctions.js'

const province = new Community([]);
let selectedCityKey = 0;
let selectedCity = {};

document.addEventListener('DOMContentLoaded', async () => {
    const errorMessage = await serverFunctions.loadData(province);
    if (errorMessage) {
        idFetchError.textContent = errorMessage;
    } else {
        viewFunctions.refreshMap(province.cityList);
        if (province.cityList.length > 0) {
            idReports.classList.remove("hidden");
        } else {
            idFetchError.textContent = "Warning: Server database is empty."
        }
    }
});


idSummaryPanel.addEventListener('click', async (event) => {

    if (event.target.id === "idAddCity") {
        if (idCityName.value === "") {
            idCreateCityMessage.textContent = "Please enter a city name.";
        } else {

            const key = province.getHighestKey() + 1; //change to key counter in server? key #0?
            const name = idCityName.value;
            const lat = Number(idLat.value);
            const long = Number(idLong.value);
            const pop = Number(idPopulation.value);

            idCityName.value = "";
            idLat.value = "";
            idLong.value = "";
            idPopulation.value = "";

            const newCity = province.createCity(key, name, lat, long, pop);

            const errorMessage = await serverFunctions.addData(newCity);
            if (errorMessage) {
                idFetchError.textContent = errorMessage;
                province.deleteCity(key);
            } else {
                viewFunctions.refreshMap(province.cityList);
                idCreateCityMessage.textContent = ""
                if (province.cityList.length > 0) {
                    idReports.classList.remove("hidden");
                }
            }
        }
    }

    if (event.target.id === "idTotalPopulation") {
        idReportMessage.textContent = `Total population of Alberta: ${province.getPopulation()}`;
    }

    if (event.target.id === "idMostNorthern") {
        let mNName = province.getMostNorthern().name;
        let mNLat = province.getMostNorthern().lat;

        idReportMessage.textContent = `The most northern city is ${mNName} at ${mNLat} latitude`;
    }

    if (event.target.id === "idMostSouthern") {
        let mSName = province.getMostSouthern().name;
        let mSLat = province.getMostSouthern().lat;

        idReportMessage.textContent = `The most southern city is ${mSName} at ${mSLat} latitude`;
    }
});


idMapPanel.addEventListener('click', async (event) => {

    if (event.target.nodeName === "circle") {
        viewFunctions.selectPoint(event.target);
        selectedCityKey = Number(event.target.id);
        selectedCity = province.getCity(selectedCityKey);
        idSelectedCity.textContent = selectedCity.name;
        idCityTools.classList.remove("hidden");
    }

    if (event.target.id === "idShow") {
        idCityMessage.textContent = selectedCity.show();
    }

    if (event.target.id === "idHowBig") {
        idCityMessage.textContent = selectedCity.howBig();
    }

    if (event.target.id === "idWhichSphere") {
        idCityMessage.textContent = province.whichSphere(selectedCity);
    }

    if (event.target.id === "idDelete") {
        const errorMessage = await serverFunctions.deleteData(selectedCityKey);
        if (errorMessage) {
            idFetchError.textContent = errorMessage;
        } else {
            province.deleteCity(selectedCityKey);
            selectedCityKey = 0;
            selectedCity = {};
            idSelectedCity.textContent = "Select City";
            idCityMessage.textContent = "";
            idCityTools.classList.add("hidden");

            viewFunctions.refreshMap(province.cityList);

            if (province.cityList.length < 1) {
                idReports.classList.add("hidden");
            }
        }
    }

    if (event.target.id === "idMovedIn") {
        if (idPopChange.value !== "") {
            selectedCity.movedIn(idPopChange.value);

            const errorMessage = await serverFunctions.updateData(selectedCity);
            if (errorMessage) {
                idFetchError.textContent = errorMessage;
                selectedCity.movedOut(idPopChange.value);
            } else {
                idCityMessage.textContent = `${idPopChange.value} moved into ${selectedCity.name}`;
                idPopChange.value = "";
            }
        }
    }

    if (event.target.id === "idMovedOut") {
        if (idPopChange.value !== "") {
            selectedCity.movedOut(idPopChange.value);

            const errorMessage = await serverFunctions.updateData(selectedCity);
            if (errorMessage) {
                idFetchError.textContent = errorMessage;
                selectedCity.movedIn(idPopChange.value);
            } else {
                idCityMessage.textContent = `${idPopChange.value} moved out of ${selectedCity.name}`;
                idPopChange.value = "";
            }
        }
    }
});

