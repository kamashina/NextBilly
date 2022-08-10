import React, { useState, useEffect } from "react";
import instance from "axios";
import styles from "../styles/Weather.module.css";
import MainContainer from "./MainContainer";

const API_KEYS = "fe21c95c2d46471796123346220907";
interface IntWeather {
  temp: string;
  wind: string;
  text: string;
  humidity: string;
  city: string;
  time: string;
}

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<IntWeather>({
    temp: "",
    wind: "",
    text: "",
    humidity: "",
    city: "",
    time: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const API_KEYS = "fe21c95c2d46471796123346220907";
  async function addWeather() {
    setLoading(true);
    await instance
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEYS}&q=Moscow&aqi=no`
      )
      .then((responce) => {
        setWeather({
          temp: responce.data.current.temp_c,
          wind: responce.data.current.wind_mph,
          text: responce.data.current.condition.icon,
          humidity: responce.data.current.humidity,
          city: responce.data.location.name,
          time: responce.data.location.localtime,
        });
        setLoading(false);
      });
  }
  useEffect(() => {
    addWeather();
  }, []);
  return loading ? (
    <img src="/loading-5.gif" alt="load" className={styles.weathercont} />
  ) : (
    <div className={styles.weathercont}>
      <p className={styles.temp}>{weather.temp}°</p>
      <p className={styles.wind}>Ветер: {weather.wind} м/с</p>
      <img className={styles.logo} src={weather.text} alt="logo" />
      <p className={styles.humidity}>Влажность: {weather.humidity}</p>
      <p className={styles.city}>{weather.city}</p>
      <p className={styles.time}>{weather.time}</p>
    </div>
  );
};

export default Weather;
