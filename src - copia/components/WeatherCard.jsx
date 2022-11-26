import React from 'react'

const WeatherCard = ({weather}) => {

    console.log(weather)
  return (
    <article className='card'>
        <header className='card__header'>
        <h1 className='card__title'>Best Weather App</h1>
        <h2 className='card__location'> {weather?.name}, {weather?.sys.country}</h2>
        </header>
        <div className='card__flex'>
        <section className='card__icon-container'>
            <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
            <h3 className='card__temp'> {weather?.main.temp} C°</h3>
        </section>
        <section className='card__info'>
            <h3> "{weather?.weather[0].description}" </h3>
            <ul className='card__list'>
                <li className='card__item'> <span className='card__span'> Wind Speed</span> {weather?.wind.speed} ms </li>  <br />
                <li className='card__item'> <span className='card__span'> Clouds</span> {weather?.clouds.all} % </li>  <br />
                <li className='card__item'> <span className='card__span'> Pressure</span> {weather?.main.pressure} hPa </li>
            </ul>
        </section>
        </div>
        <footer>
        <button className='card__button'> Degrees °F/°C </button>
        </footer>
    </article>
  )
}

export default WeatherCard