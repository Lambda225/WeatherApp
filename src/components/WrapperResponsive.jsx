import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { WeatherContext } from "../context/WeatherContext";

function WrapperResponsive({visible,setVisible}) {

  const {data} = useContext(WeatherContext)

  return (
    <div>
      { data.main ? (
        <div className={`bg-white  absolute ${visible ? "bottom-[0]" : "bottom-[-100%]" }  duration-200 left-0 w-full flex flex-wrap justify-around  gap-6 px-16 sm:px-12 pt-7`}>
          <h3 className=' font-medium w-full text-center'>Détail De Météo</h3>
          <div className='flex flex-col items-center text-[rgba(0,0,0,0.6)]'>
            <h5>Nuage</h5>
            <h5>{data.clouds.all}%</h5>
          </div>
          <div className='flex flex-col items-center text-[rgba(0,0,0,0.6)]'>
            <h5>Humidité</h5>
            <h5>{data.main.humidity}g/m3</h5>
          </div>
          <div className='flex flex-col items-center text-[rgba(0,0,0,0.6)]'>
            <h5>Vent</h5>
            <h5>{data.wind.speed}m/s</h5>
          </div>        
          <div className='flex flex-col items-center text-[rgba(0,0,0,0.6)]'>
            <h5>Pression</h5>
            <h5>{data.main.pressure}Pa</h5>
          </div>
          <div className="w-full flex justify-end mb-4"> <IoMdClose className=" text-2xl cursor-pointer" onClick={e => setVisible(false)} /></div>
        </div>
      ): ''}
    </div>
  )
}

export default WrapperResponsive