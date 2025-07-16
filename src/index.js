import "modern-normalize/modern-normalize.css";
import "./styles.css";

/* So the primary purpose here is to call the API
 * Then use the retrieved data to display some human-readable weather info
 * Specs are that the user should be able to search for a specific location
 * and that they should be able to toggle the display between Fahrenheit and Celsius.
 * From my own perspective, requirements include display the actual location being shown
 * The date, maybe, though for now I'll just be doing the current date
 * I'm thinking we show the current temperature, as well as the high and low for the day.
 * In smaller text, probably the feelslike and maybe its high and low
 * Then I want to show precipitation data (amount, probability, and type)
 * And also the current weather with its description
 * Apparently I can dynamically load some icons?
 * And we need to do something about the time of day... */

import { getWeather } from "./modules/apiCall";

function printWeatherData(location) {
    const weatherData = getWeather(location, 'us');
    weatherData.then((data) => {
        console.log(data.location);
        console.log(data.temp);
        console.log(data.conditions);
        console.log(data.icon);
    });
}

window.printWeatherData = printWeatherData;