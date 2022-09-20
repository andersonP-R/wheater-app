import styles from "./weatherMainInfo.module.css";

export default function WeatherMainInfo({ weather }) {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`https:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {" "}
            {weather?.current.condition.text}{" "}
          </div>
          <div className={styles.current}> {weather?.current.temp_c}º </div>
        </div>
      </div>
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d317840.92422780045!2d${weather?.location.lon}976!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1654975269283!5m2!1ses!2sco`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
