const API_KEY = 'GW4ZLJ44Z9JZUNLG69JLCK24B';

async function getWeather(queryString, unitGroup) {
    let baseURLString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;
    let baseQuery = (queryString === '' || queryString === null || typeof queryString !== 'string') ? 'oakland' : queryString;
    let weatherURL = new URL(`${baseURLString}${baseQuery}?unitGroup=${unitGroup}&include=current&key=${API_KEY}&contentType=json`);
    const weatherPromise = await fetch(weatherURL, { mode: "cors" });
    const weatherJSON = await weatherPromise.json();
    const weatherData = {
        "location": weatherJSON.resolvedAddress,
        "temp": weatherJSON.currentConditions.temp,
        "conditions": weatherJSON.currentConditions.conditions,
        "icon": weatherJSON.currentConditions.icon,
    }
    return weatherData;
}

export { getWeather };