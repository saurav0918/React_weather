

import React from 'react';
import styled from 'styled-components';


const WeatherLogo = styled.img`
    height:130px;
    width:130px;
    margin-left:135px;
`
const CityLabel = styled.span`
    color:${(props) => props.theme.fontColor};
    font-size:20px;
    font-weight:bold;
    margin: 70px;
    justify-content:center
`

const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    margin: 30px;
    border: black solid 2px;
    border-radius: 1px;
    & input {
    padding: 10px;
    font-size: 15px;
    border: none;
    outline: none;
    font-weight: bold;
    }
    & button {
    background-color: black;
    font-size: 15px;
    padding: 0 30px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    }

`

function CityComponent(props) {
    const {updateCity, updateWeather} = props
    
  return (
      <div>
        <br></br>
        <WeatherLogo src={'/Logos/weather-logo.jpg'} alt='Image cannot be displayed' />
        <br></br>
        <br></br>
        <CityLabel>Find weather of Any City</CityLabel>
        <SearchForm onSubmit={(e)=>updateWeather(e)}>
            <input 
                id='city' 
                placeholder='City Name'
                onChange={(e)=>{
                    updateCity(e.target.value)
                }}
            ></input>
            <button type='submit'>Search</button>
        </SearchForm>
      </div>
  )
}

export default CityComponent;