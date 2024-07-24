import React, { useState } from "react";
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";

import styles from './weatherApp.module.css'
import WeatherCard from '../weatherCard/WeatherCard'

interface IWeather {
  id: number;
  name: string;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level?: number;
    grnd_level?: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
}


export default function WeatherApp() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<IWeather | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const API_KEY = "b5ba87a07036011304fcc68827254b68"; 

  const fetchWeather = () => {
    setLoading(true);
    setError("");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching weather:", err);
        setError("City not found or error in fetching data. Please try again.");
        setLoading(false);
        setWeatherData(null);
      });
  };

  return (
    <div className={styles.weatherApp}>
      <h1>Weather App</h1>
      <div className={styles.inputContainer}>
        <MyInput
          label="Enter city name"
          name="city"
          type="text"
          placeholder="e.g., London"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <MyButton name="Get Weather" onClick={fetchWeather} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>Loading...</p>}
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
}
