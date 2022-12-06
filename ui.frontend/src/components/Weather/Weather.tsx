import React, { useState, useEffect } from "react"
import axios from "axios";
import { Container } from "../Container/Container";

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

   const [location, setLocation] = useState<any>({});
   const [weather, setWeather] = useState<any>({});
   let ic, icon; 

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
         setLocation(true);
         setWeather(data);
         // ic=data?.weather[0].icon;
         // icon = `http://openweathermap.org/img/wn/${ 
         //    data?.weather[0].icon}.png`;
        });
        
      })
    }, [])

    const getWeatherIcon = (icon: string) => `http://openweathermap.org/img/wn/${icon}@2x.png`;


console.log(icon);

   return (
      <Container flex justify_content="space-between">
         <Container>
         <h1>{weather.name}</h1>
         <sup>{weather.sys?.country}</sup>
         <Container>
            <img src={getWeatherIcon(weather?.weather?.[0].icon)}/>
            <span>{Math.round(weather.main?.temp)}<sup>°C</sup></span>
         </Container>
         </Container>
      </Container>
      )
}
export default Weather;