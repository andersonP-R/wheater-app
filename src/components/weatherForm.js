import { useState } from "react";

// css styles components
import styles from './weatherForm.module.css';

export default function WeatherForm({onChangeCity}){

    const [city, setCity] = useState('');

    function onChange(e){
        const value = e.target.value;

        if (value !== ""){
            setCity(value)
        }

    }

    function handleSubmit(e){
        e.preventDefault();

        onChangeCity(city);
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" onChange={onChange}/>
        </form>
    );
}