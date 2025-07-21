import { displayWeather } from "./displayWeather";

const currentUnitArea = document.querySelector("#currentUnit");
const weatherButton = document.querySelector("#weatherButton");
const locationInput = document.querySelector("#locationInput");
const unitButton = document.querySelector("#switchUnit")

let location = '';

function initializeInput() {
    currentUnitArea.dataset.unit = "us";
    currentUnitArea.innerText = "Temperature now displayed in Fahrenheit";
    weatherButton.addEventListener('click', () => {
        if (locationInput.value === '') return;
        location = locationInput.value;
        locationInput.value = '';
        displayWeather(location);
    });
    unitButton.addEventListener('click', () => {
        currentUnitArea.dataset.unit = (currentUnitArea.dataset.unit === 'us') ? 'metric' : 'us';
        let tempUnitName = (currentUnitArea.dataset.unit === 'us') ? 'Fahrenheit' : 'Celsius';
        currentUnitArea.innerText = `Temperature now displayed in ${tempUnitName}`;
        if (location !== '' && location !== null) displayWeather(location);
    })
}

export { initializeInput };