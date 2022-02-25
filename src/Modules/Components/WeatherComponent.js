
import React from 'react';
import styled from 'styled-components';
import { Button } from './ReactWeathercontainer';



const Location = styled.span`
  color:${(props) => props.theme.fontColor};
  margin: 40px 250px 40px;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-weight:bold;
  font-size: 20px;
  & span {
    font-size: 28px;
  }
`;

const WeatherCondition = styled.div`
  color:${(props) => props.theme.fontColor};
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  color:${(props) => props.theme.fontColor};
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  margin: 15px;
  & span {
    font-size: 14px;
    text-transform: normal;
  };
`;

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};

function WeatherComponent(props) {
    const weatherDetails = props.weatherDetails
    const resetWeather = props.resetWeather
    const isDay = weatherDetails.weather[0].icon.includes('d')
    const getTime = (timeStamp) => {
        const curr_time = new Date((timeStamp + weatherDetails.timezone) * 1000).toString().split(' ')[4].slice(0,5)
        return curr_time
    }

    return (
    <div>
        <WeatherCondition>
            <Condition>
                <span>{`${Math.floor(weatherDetails.main.temp - 273)}`} <span>&#8451;</span></span> {`|| ${weatherDetails.weather[0].description}`}
            </Condition>
        </WeatherCondition>
        <Location>{`${weatherDetails.name}, ${weatherDetails.sys.country}`}</Location>
        <WeatherInfoContainer>
            <WeatherInfoComponent 
                name={isDay ? 'Day' : 'Night'}
                value={getTime(weatherDetails.sys[isDay ? 'sunrise' : 'sunset'])}/>
            <WeatherInfoComponent name='Humidity (in %)' value={weatherDetails.main.humidity}/>
            <WeatherInfoComponent name='Wind (in m/s)' value={weatherDetails.wind.speed}/>
            <WeatherInfoComponent name='Pressure (in hPa)' value={weatherDetails.main.pressure}/>
            <br></br>
            <Button onClick={() => resetWeather(null)}>Back</Button>
        </WeatherInfoContainer>
    </div>
  )
}

export default WeatherComponent