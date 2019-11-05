
const viewFunctions = {

    refreshMap: (cityList) => {
        //Clear Map
        while (idSVG.hasChildNodes()) {
            idSVG.removeChild(idSVG.firstChild);
        }
        //Repopulate Map
        cityList.forEach((city) => {
            viewFunctions.mapPoints(city);
        })
    },

    mapPoints: (city) => {
        //Inspired by http://www.petercollingridge.co.uk/tutorials/svg/interactive/javascript/
        let point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        let label = document.createElementNS('http://www.w3.org/2000/svg', 'text')

        point.setAttribute('cx', 165 + (city.long + 115) * 33);
        point.setAttribute('cy', 275 - (city.lat - 54.5) * 50);
        point.setAttribute("r", "10");
        point.setAttribute("stroke", "black");
        point.setAttribute("stroke-width", "1");
        point.setAttribute("fill", "orange");

        label.setAttribute('x', 165 + (city.long + 115) * 33 + 10);
        label.setAttribute('y', 275 - (city.lat - 54.5) * 50 - 10);

        let txt = document.createTextNode(city.name);
        label.appendChild(txt);

        idSVG.appendChild(point);
        idSVG.appendChild(label);
    }
};

export default viewFunctions;