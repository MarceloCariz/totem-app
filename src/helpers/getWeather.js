
const url = 'http://api.weatherapi.com/v1/current.json?key=745c51793be941778f015800220908&q=Providencia Chile&aqi=no';

export const getWeather = async() => {
    
    const resp = await fetch(url);
    const {localtion, current} = await resp.json();

    const {name} = localtion;
    const {temp_c} = current;

    return {name, temp_c}

};