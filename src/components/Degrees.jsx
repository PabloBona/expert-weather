import React from 'react'
import { useState } from 'react'

 

const Degrees = ({temperature}) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const celsiusornot = () => {setIsCelsius(!isCelsius)}
    return (
    <footer>
        <h2 className='text-3xl '>{isCelsius ? `${temperature?.celsius} °C`: `${temperature?.farenheit} °F`}</h2>
        
    <button className='card__button bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400' onClick={celsiusornot}> Change to {isCelsius?`°Farenheit`:`°Celsius`} </button>
    </footer>
  )
}

export default Degrees