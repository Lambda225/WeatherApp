import React, { createContext, useState } from 'react'

export const ApiContext = createContext()

function ApiProvider({Children}) {
    
    const [api,setApi] = useState({
        'base':'https://api.openweathermap.org/data/2.5/',
        'kye':'53e4727ceba19dd478796c111f850894'
    })

    const providerValue = {api,setApi}

  return (
    <ApiContext.Provider value={providerValue}>
        {Children}
    </ApiContext.Provider>
  )
}

export default ApiProvider