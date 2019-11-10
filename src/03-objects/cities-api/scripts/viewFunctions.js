const viewFunctions = {

    refreshMap: (cityList) => {
        //Clear Map
        while (idSVG.hasChildNodes()) {
            idSVG.removeChild(idSVG.firstChild);
        }
        //Repopulate Map
        cityList.forEach(city => {
            viewFunctions.mapPoints(city);
        })
    },

    mapPoints: (city) => {
        //Inspired by http://www.petercollingridge.co.uk/tutorials/svg/interactive/javascript/
        let point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        let label = document.createElementNS('http://www.w3.org/2000/svg', 'text')

        point.setAttribute('cx', 165 + (city.long + 115) * 33);
        point.setAttribute('cy', 275 - (city.lat - 54.5) * 50);
        point.setAttribute("r", "7");
        point.setAttribute("stroke", "black");
        point.setAttribute("stroke-width", "1");
        point.setAttribute("fill", "orange");
        point.setAttribute("id", city.key);
        point.setAttribute("class", "city-point");

        label.setAttribute('x', 165 + (city.long + 115) * 33 + 10);
        label.setAttribute('y', 275 - (city.lat - 54.5) * 50 - 10);
        label.appendChild(document.createTextNode(city.name));

        idSVG.appendChild(point);
        idSVG.appendChild(label);
    },

    selectPoint: (selectedPoint) => {
        idSVG.childNodes.forEach(point => {
            point.classList.remove("city-selected");
        });

        selectedPoint.classList.add("city-selected");
    }
};

export default viewFunctions;