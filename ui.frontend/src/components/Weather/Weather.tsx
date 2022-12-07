import React, { useState, useEffect } from "react"
import axios from "axios";
import { Container } from "../Container/Container";
import "./weather.scss"

export interface WeatherProps {
   name?: string,
   weather?:{
       icon: string,
   }
   sys?:{
      country: string,
   }
   main?:{
      temp: Number,
   }
}

 const Weather = ({

 }: WeatherProps ): JSX.Element => { 

   const [weather, setWeather] = useState<any>({});

   async function getWeather(lat:Number, long: Number) {
      let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: 'pt',
          units: 'metric'
        }
      });
      return await res.data;
    }
   useEffect(()=> {
      navigator.geolocation.getCurrentPosition((position)=> {
        getWeather(position.coords.latitude, position.coords.longitude).then( (data) => {
         setWeather(data);
        });
        
      })
    }, [])

    const getWeatherIcon = (icon: string) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

   return (
      <Container className="weather-container" flex justify_content="space-between">
         <Container className="weather-content-locate">
            <span>{weather.name} - </span>
            <span>{weather.sys?.country}</span>
            <Container className="weather-content-info">
               <img src={getWeatherIcon(weather?.weather?.[0].icon)}/>
               <span> {Math.round(weather.main?.temp)}<sup>°</sup></span>
            </Container>
         </Container>
      </Container>
      )
}
export default Weather;