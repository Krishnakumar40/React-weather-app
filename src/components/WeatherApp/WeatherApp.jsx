import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
// const importImages = (directory) => {
//     let images = {};
//     directory.keys().forEach((key) => {
//       images[key.replace('./', '')] = directory(key).default;
//     });
//     return images;
//   };
  
//   const imagesContext = require.context('../Assets', false, /\.(png)$/);
//   const images = importImages(imagesContext);

const WeatherApp=() => {
    const [Humidity,Sethumidity]=useState(64);
    const [Wind,setwind]=useState(18);
    const [Temperature,setTemperature]=useState(24);
    const [Name,setName]=useState('London')
    const [wicon,setWicon]=useState('11d')
    let api_key="be46f327cc44baf072cba12582743a79";
    const Search = async () =>{
        const element=document.getElementsByClassName("cityInput")
        if(element[0].value===''){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data =await response.json();
        Sethumidity(Math.floor(data.main.humidity))
        setwind(Math.floor(data.wind.speed))
        setName(data.name)
        setTemperature(Math.floor(data.main.temp))
        setWicon(data.weather[0].icon )

    }
    
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='search'/>
            <div className="search-icon" onClick={() =>Search()}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={`images/${wicon}.png`} alt="" />
        </div>
        <div className="weather-temp">{Temperature}°c</div>
        <div className="weather-location">{Name}</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity-percent">{Humidity}%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity-percent">{Wind}km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WeatherApp