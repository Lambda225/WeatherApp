import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

function WeatherDetail() {

  const {data} = useContext(WeatherContext)

  return (
    <div className='h-1/2 mt-10 pr-10'>
      <h3 className='text-white mb-10'>Détail De Météo</h3>
      { data.main ? (
        <div className='flex flex-col gap-y-4 text-[rgba(255,255,255,0.7)]'>
        <div className='flex justify-between'>
          <h5>Nuage</h5>
          <h5>{data.clouds.all}%</h5>
        </div>
        <div className='flex justify-between'>
          <h5>Humidité</h5>
          <h5>{data.main.humidity}g/m3</h5>
        </div>
        <div className='flex justify-between'>
          <h5>Vent</h5>
          <h5>{data.wind.speed}m/s</h5>
        </div>        
        <div className='flex justify-between'>
          <h5>Pression</h5>
          <h5>{data.main.pressure}Pa</h5>
        </div>
      </div>
      ) : '' }
    </div>
  )
}

export default WeatherDetail