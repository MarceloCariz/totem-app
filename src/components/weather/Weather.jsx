import {useEffect, useRef, useState} from "react";
import { getWeather } from "../../helpers/getWeather";
import "./weather.css";

export const Weather = () => {
    
    const span = useRef();
    const time = () => {
        const datetime = new Date();
        const hour = datetime.getHours();
        const minute = datetime.getMinutes();

        return `${hour}:${minute}`;
    };

    useEffect(() => {
        const cl = setInterval(() => {
            span.current.innerHTML = `${time()}`;
        }, 1000);
    }, [])

    

    // const {name, temp_c} = getWeather();

    return (
        <div className="weather">
            <div>
                <span className="timeWeatherLocation" ref={span}>
                   {time()}
                </span> 
            </div>

            <div>
                <span className="timeWeatherLocation">7C</span> 
            </div>
        </div>
    )
}
