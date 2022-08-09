import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'

import "./weather.css";
import { useWeather } from "../../hooks/useWeather";
import styled from "styled-components";

export const Weather = () => {


    const span = useRef();
    const time = () => {
        const datetime = new Date();
        const hour = datetime.getHours();
        const minute = ('0' + datetime.getMinutes()).slice(-2);

        return `${hour}:${minute}`;
    };

    useEffect(() => {
        const cl = setInterval(() => {
            span.current.innerHTML = `${time()}`;
        }, 1000);
        return () => clearInterval(cl);
    }, [])

    const weather = useWeather();

    return (
        <div className="weather">
            <span className="timeLocation" ref={span}>
                {time()}
            </span>

            <Span className="">{weather.temp_c}°<FontAwesomeIcon icon={faCloudSun} /></Span>

        </div>
    )
}


const Span = styled.span`
display: flex;  
`;
