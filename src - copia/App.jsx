
import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setcoords] = useState()
  const [weather, setWeather] = useState()

  const success = (pos) => {
    setcoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    
    })
 
  }
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
     if (coords){
      const apiKey = `19c70a694798cd2affa7bec88e21b7ad`
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=metric`
      axios.get(URL)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err))
     }
  }, [coords])

  console.log(weather);

  return (
    <div className="App">
      <WeatherCard weather={weather} />
    </div>
  )
}

export default App
