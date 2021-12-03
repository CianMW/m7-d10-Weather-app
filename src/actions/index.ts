import { Dispatch } from 'redux'
require('dotenv').config()
//import dotenv from "dotenv/config"


export const getWeatherForecastAction = (city:string) => {
    // do fetch stuff
    return async (dispatch: Dispatch) => {
      console.log("THIS IS THE URL", city);
      console.log("THIS IS THE env", process.env.WEATHER_KEY);
      
  
      // dispatch({
      //   type: "TOGGLE_LOADER",
      //   payload: true,
      // });
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY} `);
      if (response.ok) {
        const data = await response.json();
        console.log("HERE IS THE FETCHED DATA :", data);
        await dispatch({
          type: "SET_CURRENT_LOCATION_WEATHER",
          payload: data,
        });
        // setTimeout(() => {
        //   dispatch({
        //     type: "TOGGLE_LOADER",
        //     payload: false,
        //   });
        // }, 1000);
      } else {
        console.log("ERROR: could not fetch data");
      }
    };
  };