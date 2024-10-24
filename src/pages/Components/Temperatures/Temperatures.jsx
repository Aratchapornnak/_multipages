import { useState } from 'react';

import Variable from '../Variable/Variable';

import './Temperatures.css';

function Temperatures({ cel, fah, kel }) {
    const [Celsius, setCelsius] = useState(cel || 0);
    const [Fahrenheit, setFahrenheit] = useState(fah || (cel * 9/5) + 32 || 0);
    const [Kelvin, setKelvin] = useState(kel || cel + 273.15 || 0);
    const [activeUnit, setActiveUnit] = useState('Celsius');

    // Celsius
    const handleCelsiusChange = (newCelsius) => {
        setActiveUnit('Celsius');
        setCelsius(newCelsius);
        setFahrenheit((newCelsius * 9/5) + 32);
        setKelvin(newCelsius + 273.15);
    };

    // Fahrenheit
    const handleFahrenheitChange = (newFahrenheit) => {
        setActiveUnit('Fahrenheit');
        setFahrenheit(newFahrenheit);
        const newCelsius = (newFahrenheit - 32) * 5/9;
        setCelsius(newCelsius);
        setKelvin(newCelsius + 273.15);
    };

    // Kelvin
    const handleKelvinChange = (newKelvin) => {
        setActiveUnit('Kelvin');
        setKelvin(newKelvin);
        const newCelsius = newKelvin - 273.15;
        setCelsius(newCelsius);
        setFahrenheit((newCelsius * 9/5) + 32);
    };

    return (
        <div className='temperatures-container'>
            <h3 className='temperatures-title'>Temperatures</h3>
            <h3 className='temperatures-display'>
                <span className='badge bg-primary'>{Celsius.toFixed(2)} °C</span>
                <span className='badge bg-primary'>{Fahrenheit.toFixed(2)} °F</span>
                <span className='badge bg-primary'>{Kelvin.toFixed(2)} K</span>
            </h3>
            <div className='temperatures-variable'>
                <Variable
                    name={'Celsius'}
                    value={Celsius}
                    setValue={handleCelsiusChange}
                />
                <Variable
                    name={'Fahrenheit'}
                    value={Fahrenheit}
                    setValue={handleFahrenheitChange}
                />
                <Variable
                    name={'Kelvin'}
                    value={Kelvin}
                    setValue={handleKelvinChange}
                />
            </div>
        </div>
    );
}

export default Temperatures;