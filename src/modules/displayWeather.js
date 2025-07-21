import { getWeather } from "./apiCall";

const unitArea = document.querySelector("#currentUnit");
const dataArea = document.querySelector("#dataArea");

async function displayWeather(location) {
    const unitGroup = unitArea.dataset.unit;
    dataArea.innerHTML = '<p>Loading...</p>'
    try {
        const data = await getWeather(location, unitGroup);
        let header = document.createElement('p');
        header.classList.add('weatherText');
        header.id = 'locationHeader';
        header.innerText = `Weather data for ${data.location}:`;
        let temp = document.createElement('p');
        temp.classList.add('weatherText');
        temp.id = 'temperatureText';
        let unitLetter = (unitGroup === 'us') ? 'F' : 'C';
        temp.innerText = `Temperature: ${data.temp}\u00B0${unitLetter}`;
        let cond = document.createElement('p');
        cond.classList.add('weatherText');
        cond.id = 'conditionsText';
        cond.innerText = `Conditions: ${data.conditions}`;
        dataArea.innerHTML = '';
        dataArea.appendChild(header);
        dataArea.appendChild(temp);
        dataArea.appendChild(cond);
    }
    catch (e) {
        dataArea.innerHTML = `<p>There was an error, see message: ${e.message}. Please try again.<p>`;
    }
}

export { displayWeather };