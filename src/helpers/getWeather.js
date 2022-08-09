

const url = 'http://api.weatherapi.com/v1/current.json?key=745c51793be941778f015800220908&q=Providencia Chile&aqi=no';

export const getWeather = async() => {

    const resp = await fetch(url);
    const {location, current} = await resp.json();

    const {name} = location;
    const {temp_c} = current;
    
    const weather = {
        name,
        temp_c
    };

    return weather;
}

