import { useEffect, useState } from 'react';
import { getWeather } from '../helpers/getWeather';


export const useWeather = () => {
    const [weather, setWeather] = useState({
        name: "",
        temp_c: 0
    });

    const [time, setTime] = useState(true);

    useEffect(() => {
        getWeather().then((w) => {
            setWeather({
                name: w.name,
                temp_c: w.temp_c
            });
        }); 
    }, [])
    

    useEffect(() => {
        setTimeout(() => {
            getWeather().then((w) => {
                setWeather({
                    name: w.name,
                    temp_c: w.temp_c
                });
            });  
            
            setTime(!time);

            console.log("weather cambio!! ", time);

        }, 1800000);
    }, [time]);

    
    return weather;
}
