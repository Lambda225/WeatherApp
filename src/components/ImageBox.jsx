import React, { useContext, useEffect, useState } from 'react'
import { BsBrightnessHigh } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsClouds , BsCloudSun ,BsCloudLightningRain, BsCloudDrizzle } from "react-icons/bs";
import { WeatherContext } from '../context/WeatherContext';
import axios from 'axios';

function ImageBox({setVisible}) {

  const {api,setData,data} = useContext(WeatherContext)
  const [name,setName] = useState('')
  const icon = {
    'Clouds':<BsClouds className=' text-4xl' />,
    'Sunny':<BsBrightnessHigh className=' text-4xl' />,
    'Rain': < BsCloudLightningRain className=' text-4xl' />,
    'Clear':<BsCloudSun className=' text-4xl' />,
    'Drizzle':<BsCloudDrizzle className=' text-4xl' />
  }
  const [jour,setJour] = useState('')
  const months = ['Janv','Févr','Mars','Avr','Mai','Juin','Juil','Août','Sept','Oct','Nov','Déc']
  const days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']

  const getDat = () =>{
    
    const d = new Date()
    const day = days[d.getDay()]
    const date = d.getDate()
    const month = months[d.getMonth()]
    const year = d.getFullYear()
    const hours = d.getHours()
    const min = d.getMinutes()

    setJour(`${(hours+'').length == 1? '0'+hours : hours}:${ (min+'').length == 1? '0'+min : min} - ${day} ${date} ${month} ${year}`)
  }

  const hundleSubmit = (e) =>{
    e.preventDefault()
    
    axios.get(`${api.base}weather?q=${name}&units=metric&APPID=${api.kye}`)
    .then((res) =>{
    setData(res.data)
    setName('')
    console.log(res.data);
    })
    .catch((error) =>{console.log(error)})
  }

  useEffect(()=>{
    getDat()
    setInterval(getDat,1000)

  },[])

  return (
    <div className={` ${Math.round(data.main.temp) < 16? 'bg-cold' : 'bg-warm saturate-150'} duration-150 bg-cover flex flex-col justify-between lg:flex-row lg:items-end pt-16 lg:py-16 px-16 sm:px-12 w-full lg:w-2/3`}>
        <div className='flex justify-center lg:hidden'>
          <form onSubmit={hundleSubmit} className='flex items-end w-11/12 md:w-2/3'>
              <div className='w-full pr-4'><input value={name} type="text" placeholder='Search' className={`${Math.round(data.main.temp) < 16? 'border-slate-900 text-slate-900 placeholder:text-slate-900' :'border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] placeholder:text-[rgba(255,255,255,0.7)]' } w-full border-b bg-transparent focus:outline-none px-2 py-2`} onChange={e => setName(e.target.value)} /></div>
              <button className={`${Math.round(data.main.temp) < 16? 'bg-[rgba(0,0,0,0.7)]' : 'bg-[rgba(255,255,255,0.7)]'} px-5 py-4`}><RiSearchLine className={`${Math.round(data.main.temp) < 16? 'text-gray-100' : 'text-gray-700'} text-xl`}/></button>
          </form>
        </div>
        {data.main ? (
          <div  className={`${Math.round(data.main.temp) < 16? 'text-gray-900' : 'text-white'} text-shadow flex items-center gap-6 flex-wrap lg:flex-nowrap `}>
          <h2 className=' text-8xl'>{Math.round(data.main.temp)}°</h2>
          <div className='flex flex-col justify-center'>
              <h3 className=' text-4xl '>{data.name}-{data.sys.country}</h3>
              <p className=' text-sm'>{jour}</p>
          </div>
          <div className='flex flex-col justify-center items-center '>
              <div> {icon[data.weather[0].main]}</div>
              <p className='text-sm'>{data.weather[0].main}</p>
          </div>
          <div className='w-full flex justify-end lg:hidden pb-4 pt-10'><AiOutlineAppstore className='text-2xl cursor-pointer' onClick={e => setVisible(true)} /></div>
      </div>
        ) : <div></div> }

    </div> 
  )
}

export default ImageBox