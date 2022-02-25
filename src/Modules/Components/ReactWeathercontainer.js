import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CityComponent from './CityComponent';
import WeatherComponent from './WeatherComponent';
import ErrorComponent from './ErrorComponent';
import axios from 'axios';
import {lightTheme, darkTheme} from '../../Theme';
import {ThemeProvider} from 'styled-components';

const ContainerStyle = styled.div`
    display:flex;
    flex-direction:column;
    margin:auto;
    align-items:center;
    padding:30px 30px;
    box-shadow:0 3px 6px 0 #555;
    border-radius:5px;
    width:700px;
    height:400px;
    background-color:${(props) => props.theme.body};
    transition: all 0.5s
`;

const WeatherLabel = styled.span`
    color:${(props) => props.theme.fontColor};
    font-size:30px;
    font-weight:bold
`
const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: black;
  opacity: 0.9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function ReactWeathercontainer() {
    
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(false)
    const [theme, setTheme] = useState('light')

    const Api_key = '8f877ca97edd1663b79b8dcd94640d5e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`;

    useEffect(() => {
        const weather_data = localStorage.getItem('weather-data')
        if(weather_data){
            setWeather(JSON.parse(weather_data))
        }
        else{
            setWeather(null)
        }
    },[]
    )

    const GetWeather = (event) => {
        event.preventDefault()
        axios
        .get(url)
        .then((result) => {
            setWeather(result.data)
            localStorage.setItem('weather-data', JSON.stringify(result.data))
            setError(false)
        })
        .catch(() => {
            setError(true)
        })
    }

    const themeToggler = () => {
      theme === 'light'? setTheme('dark'): setTheme('light')
    }


  return (
    <div>
        <ThemeProvider theme={theme==='light'? lightTheme: darkTheme}>
            <ContainerStyle>
                <WeatherLabel>Weather App</WeatherLabel>
                {weather?<WeatherComponent weatherDetails={weather} resetWeather={setWeather}/>:<CityComponent updateCity={setCity} updateWeather={GetWeather}/>}
                {error?<ErrorComponent />:null}
                <Button onClick={() => themeToggler()} hidden={error || weather}>Change Theme</Button>
            </ContainerStyle>
        </ThemeProvider>
    </div>
  )
}

export {ReactWeathercontainer, Button}