import axios from "axios";


const url = 'https://api.openweathermap.org/data/2.5/weather?q=providencia,cl&appid=bfda3fb8deedbb888f02919d7c6f24d4';

export const getWeather = async() => {
    const {data} = await axios(url);
    const {temp} = data.main;
    const temperatura = (temp - 273.15).toFixed(1);

    const weather = {
        name : data.name,
        temp_c:temperatura
    }
    return weather
 }


