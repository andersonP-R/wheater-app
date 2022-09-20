import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

import styles from "./weatherApp.module.css";
import Loading from "./loading";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`; // el signo al final del state "weather" es por que weather puede ser null, asi que ese signo (?) indica que es opcional
    // el doble signo de pregunta es una condicion la cual indica de que si la evaluación es null, imprime un string vacio
  }, [weather]);

  async function loadInfo(city = "london") {
    // esta es la peticion http en la cual incluimos las var de entorno
    try {
      const req = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      ); // url con las var de entorno

      const json = await req.json();

      setWeather(json);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
}

// styles components es una manera eficaz y clara de aplicar estilos ya que permite modular las clases en el .moudule.css y luego en el componente importarlo, aplicarlo a la capa que queremos y ya.
