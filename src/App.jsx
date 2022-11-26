
import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Degrees from './components/Degrees'
import Loading from './components/Loading'
import Loading2 from './components/Loading2'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setcoords] = useState()
  //Coords guarda la lat y la long, a traves de la funcion setcoords que la modifica y que se le asigna a la variable success

  const [weather, setWeather] = useState()
  //weather guarda el clima, a traves de la funcion setWeather que la modifica

  const [temperature, setTemperature] = useState()
  //pasar de grados 

  


  //Esta es la funcion que se ejecuta cuando llega la informacion nuestra ubicacion
  const success = (pos) => {
    setcoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    
    })
    
  }
  useEffect(() => {
    //Llama a la API del navegador para permitir la ubicacion
    navigator.geolocation.getCurrentPosition(success)
  }, [])
    //Pide info a la API del clima
  useEffect(() => {
     if (coords){ //este if es necesario para pedir la info del clima solo cuando coords, o sea LAT y LONG hayan llegado, no se pide en el primer renderizado
      const apiKey = `19c70a694798cd2affa7bec88e21b7ad`
    
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(URL)
      //cuando llega la informacion de weather se ejecuta el then, deja de estar asincronico
      .then(res => {
        const celsius =  (res.data.main.temp - 273.15).toFixed(1)
        const farenheit =   (celsius * 9/5 + 3).toFixed(1)
        setTemperature({celsius, farenheit})
      
        setWeather(res.data)}) // then y catch reciben como parametros un callback, en el then guarda res.data dentro del state weather a traves de setWeather
      .catch(err => console.log(err))
    }
  }, [coords]) //Como es asincronica la peticion, necesitamos usar dentro del arreglo de dependencia COORDS, o sea cuando llegue la informacion
  // por q en realidad se ejecuta 2 veces, al nacimiento que va a dar undefined y cuando llegue.

  

  return (
    <main className='main main__loader'>
    <div className="App">
      <section>
      {
        weather ? 
        <WeatherCard weather={weather}  /> 
        
        : <Loading />
      }
      {
        weather ? 
        <Degrees temperature={temperature} />
        
        : <Loading2 />
      }

      </section>
    </div>
    </main>
  )
}
//En la linea 47 <WeatherCard weather={weather}---> son las props que se 
//mandan a WeatherCard.jsx para enviar informacion de weather y se reciben en weatherCards.jsx en la const Weather/> 
export default App
