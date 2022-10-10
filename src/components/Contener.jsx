import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../context/ApiContext'
import { WeatherContext } from '../context/WeatherContext'

function Contener({children}) {
  const {api,setData,data} = useContext(WeatherContext)
  
  useEffect(() =>{
    axios.get(`${api.base}weather?q=Abidjan&units=metric&APPID=${api.kye}`)
    .then((res) =>{
      setData(res.data)
      console.log(res.data);
    })
    .catch((error) =>{console.log(error)})
  },[])

  if(data.main){
    return(
      <div className={`${Math.round(data.main.temp) < 16 ? 'from-[#F3FCFF] to-[#D1D9E0]' : ' from-[#7297A7] to-[#b9d5d6]'} duration-15 bg-gradient-to-t flex justify-center items-center h-screen font-satoshi`}>{children}</div>
    )
  }
    
  
}

export default Contener