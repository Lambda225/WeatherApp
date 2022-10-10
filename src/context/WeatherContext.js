import React, { createContext, useState } from 'react'

export const WeatherContext = createContext()

function WeatherProvider({children}) {

    const [data,setData] = useState({})
    const [api,setApi] = useState({
      'base':'https://api.openweathermap.org/data/2.5/',
      'kye':'53e4727ceba19dd478796c111f850894'
    })

    const providerValue = {
        setData,
        data,
        api,
        setApi
    }

  return (
    <WeatherContext.Provider value={providerValue}>
        {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider