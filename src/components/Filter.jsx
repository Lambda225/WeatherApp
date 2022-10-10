import axios from 'axios';
import React, { useContext, useState } from 'react'
import { RiSearchLine } from "react-icons/ri";
import { WeatherContext } from '../context/WeatherContext';

function Filter() {

    const ville = ['Abidjan','Manchester','New York','Berlin']
    const [name,setName] = useState('')
    const {api,setData} = useContext(WeatherContext)

    const hundelSubmit = (e) =>{
        e.preventDefault()
        
        axios.get(`${api.base}weather?q=${name}&units=metric&APPID=${api.kye}`)
        .then((res) =>{
        setData(res.data)
        setName('')
        console.log(res.data);
        })
        .catch((error) =>{console.log(error)})
    }

    const hundleclick = (e,i) =>{
        e.preventDefault()
        
        axios.get(`${api.base}weather?q=${ville[i]}&units=metric&APPID=${api.kye}`)
        .then((res) =>{
        setData(res.data)
        setName('')
        console.log(res.data);
        })
        .catch((error) =>{console.log(error)})
    }

  return (
    <div className='w-full h-1/2 flex flex-col'>
        <form className='flex items-end ' onSubmit={hundelSubmit}>
            <div className='w-full pr-4'><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Search' className='w-full border-b bg-transparent focus:outline-none px-2 py-2 border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] placeholder:text-[rgba(255,255,255,0.7)]' /></div>
            <button className='px-5 py-5 bg-[rgba(255,255,255,0.7)]'><RiSearchLine className='text-xl text-gray-700'/></button>
        </form>
        <div className='mt-9 text-[rgba(255,255,255,0.7)] mr-10 pb-9 border-b border-b-[rgba(255,255,255,0.7)]' >
            {
                ville.map((elt,i) =>{
                    return <p className='py-2 px-4 cursor-pointer hover:bg-[rgba(255,255,255,0.7)]' key={i} onClick={(e) => hundleclick(e,i)}>{elt}</p>
                })
            }
        </div>
    </div>
  )
}

export default Filter