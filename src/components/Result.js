import React from 'react';

const Result = (props) => {
    const{err, city, temp, sunrise, sunset, pressure, wind, date} = props.weather

    let content = null;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date (sunset * 1000).toLocaleTimeString()

    if(!err && city) {
        content = (
            <div>Wyszukiwanie dla miasta <strong>{city}</strong>
            <h3>Wyniki wyszukiwania dla <em>{city}</em> </h3>
            <h4>Dane dla dnia i godziny: {date}</h4>
            <h4>Aktualna temperatura: {temp}&#176;C</h4>
            <h4>Wschód słońca: {sunriseTime}</h4>
            <h4>Zachód słońca: {sunsetTime}</h4>
            <h4>Aktualna siła wiatru: {wind} m/s</h4>
            <h4>Aktualne cisnienie {pressure} hPa</h4> 
            </div>
        )
    }

    return (
        <div className = 'result'>
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>
    );
}
export default Result;