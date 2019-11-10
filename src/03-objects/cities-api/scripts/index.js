import { Community, postData } from './cities.js'
import viewFunctions from './viewFunctions.js'

const province = new Community([]);
let selectedCityKey = 0;

//DOMContentLoaded inspired by Mike
document.addEventListener('DOMContentLoaded', async () => {
    await province.loadData();
    viewFunctions.refreshMap(province.cityList);
    if (province.cityList.length > 0) {
        idReports.classList.remove("hidden");
    }
});


idSummaryPanel.addEventListener('click', (event) => {
    // console.log(event)

    if (event.target.id === "idAddCity") {
        if (idCityName.value === "") {
            idCityMessage.textContent = "Please enter a city name.";
        } else {

            let key = province.getHighestKey() + 1; //change to key counter in server? key #0?
            let name = idCityName.value;
            let lat = Number(idLat.value);
            let long = Number(idLong.value);
            let pop = Number(idPopulation.value);

            idCityName.value = "";
            idLat.value = "";
            idLong.value = "";
            idPopulation.value = "";

            province.createCity(key, name, lat, long, pop);

            viewFunctions.refreshMap(province.cityList);
            idCityMessage.textContent = ""
            if (province.cityList.length > 0) {
                idReports.classList.remove("hidden");
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

idMapPanel.addEventListener('click', (event) => {
    console.log(event)

    if (event.target.nodeName === "circle") {
        viewFunctions.selectPoint(event.target);
        selectedCityKey = Number(event.target.id);
        idSelectedCity.textContent = province.getCity(selectedCityKey).name;
    }

    if (event.target.id === "idMovedIn") {
        if (idPopChange.value !== "") {
            province.getCity(selectedCityKey).movedIn(idPopChange.value);
            idPopChange.value = "";
        }
    }

    if (event.target.id === "idMovedOut") {
        if (idPopChange.value !== "") {
            province.getCity(selectedCityKey).movedOut(idPopChange.value);
            idPopChange.value = "";
        }
    }
});

